import { format, addYears, subYears, parseISO } from 'date-fns';
// Import Tagify
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';

export default (function view() {
    let elementID = 0;

    function createElement(elementName, className=null) {
        const element = document.createElement(elementName);
        
        if(className) {    
            element.className = className;
            return element;
        }
        else {
            return document.createElement(elementName);
        }
    }

    function createDateInput(labelName, fieldName, defaultValue) {
        const dateDiv = document.createElement('div');
        const dateLabel = document.createElement('label');
        const dateInput = document.createElement('input');
        
        const currentDate = new Date();
        const maxDate = addYears(currentDate, 1);
        const minDate = subYears(currentDate, 1);
        
        dateLabel.textContent = labelName;
        dateInput.type = 'date';
        dateInput.name = fieldName;
        dateInput.value = defaultValue;
        dateInput.min = format(minDate, 'yyyy-MM-dd');
        dateInput.max = format(maxDate, 'yyyy-MM-dd');

        dateDiv.append(dateLabel, dateInput)
        return dateDiv;
    }

    function insertProjectHeading(query, projectName) {
        const targetDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        targetDiv.appendChild(projectHeading);
    }

    function insertProjectItemForm(query, item) {
        // callback function for the 'todo' checkbox
        const toggleItemCompletionOnClick = (e) => {
            if(e.target.checked) {
                item.toggleCompletion();
                // console.log(item);
            } else {
                item.toggleCompletion();
                // console.log(item);
            }
        }

        const createCheckbox = () => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = elementID; // link "id" and "for"
            input.addEventListener('click', toggleItemCompletionOnClick);            
            return input
        }

        const getExclusiveSiblingNodes = (node) => {
            let siblings = [];

            const currentID = node.parentNode.id;
            const otherTodoItems = document.querySelectorAll(`.todoItem[id]:not([id="${currentID}"])`);
            
            Array.from(otherTodoItems).forEach(item => {
                const itemInfo = item.querySelector('.itemInfo');
                siblings.push(itemInfo)
            });

            return siblings;
        }

        const makeTodoItemExpand = (e) => {
            const siblingInfoDiv = e.target.parentNode.querySelector('.itemInfo');

            if(siblingInfoDiv.classList.contains('hidden')) {
                siblingInfoDiv.classList.remove('hidden');
            }
            siblingInfoDiv.classList.remove('contracted');
            siblingInfoDiv.classList.add('expanded');

            // make parent node active so that it can activate borders
            e.target.parentNode.classList.add('active');
        }

        const createItemTitle = (titleType) => {
            let titleElement;
            if(titleType == 'input') {
                const inputElement = document.createElement('input');
                inputElement.type = 'text';
                inputElement.defaultValue = item.title;
                inputElement.name = 'itemTitle';
                inputElement.id = 'itemTitle';
                inputElement.placeholder = 'Todo Item';
                titleElement = inputElement;
            }
            else if(titleType == 'label') {
                const labelElement = document.createElement('label');
                labelElement.textContent = item.title;
                titleElement = labelElement;
            }
            return titleElement;
        }

        const createLabel = (_titleType) => {
            const label = createItemTitle(_titleType);
            /* NB: We don't link the 'id' and 'for' elements because users' clicking on the label shouldn't toggle the checkbox.
            // label.setAttribute('for', elementID); */
            
            // add callback to expand item on click
            label.addEventListener('click', (e) => {
                // first hide other items
                const otherItemInfo = getExclusiveSiblingNodes(e.target);
                otherItemInfo.forEach(infoDiv => {
                    infoDiv.parentNode.classList.remove('active');
                    infoDiv.classList.remove('expanded');
                    infoDiv.classList.add('contracted');
                });
                
                // then make current item expand
                makeTodoItemExpand(e);
            })

            return label;
        }

        const createItemInfoExpandable = () => {
            const notesInput = (() => {
                const notes = document.createElement('input');
                notes.type = 'text';
                notes.name = 'itemNotes';
                notes.placeholder = 'Notes';
                notes.defaultValue = (item.notes) ? item.notes : '';
                return notes;
            })();

            const itemTaskListDiv = (() => {
                const checklistDiv = document.createElement('div');
                const checklistList = document.createElement('ul');
                
                item.checklist.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task;
                    checklistList.appendChild(listItem);
                })
                
                checklistDiv.appendChild(checklistList);
                return checklistDiv;
            })();

            const datesDiv = (() => {
                const dateElements = document.createElement('div');
                const date = createDateInput('Date: ', 'itemDate', (item.date) ? item.date : null);
                // 'Figure Space' used in dueDate label to align the date pickers (see: https://qwerty.dev/whitespace/)
                const dueDate = createDateInput('Due: ', 'itemDueDate', (item.dueDate) ? item.dueDate : null);
                
                dateElements.append(date, dueDate);
                return dateElements;
            })();

            const tagsDiv = (() => {
                const inputElement = createElement('input', 'tagsInput');
                inputElement.placeholder = 'Tags';
                return inputElement;

            })();

            // Turns text input into a Tagify input, enabling tag addon
            const tagifyInput = (input) => {
                const tagifyInstance = new Tagify(input);
                input.addEventListener('change', tagifyEventListener)
                
                // Assign Tagify object as a todoItem property
                item.tagify = tagifyInstance;
        
                function tagifyEventListener (e) {
                    // console.log(e.target.value);
                    item.updateTags();
                    // console.log(item._tags);
                }
            }

            const saveBtn = (() => {
                const onSubmit = (e) => {
                    e.preventDefault();

                    const formElement = e.target.parentNode.parentNode;
                    const formData = new FormData(formElement);
                    const formObj = {}

                    for (let [key, value] of formData.entries()) {
                        let dateFormatted;

                        if(key.includes('Date') && value) {
                            dateFormatted = format(new Date(value), 'yyyy-MM-dd');
                        }
                        
                        // read formData (iterator) values into an object, formatting where necessary
                        switch (key) {
                            // convert from ISO to 'yyyy-MM-dd' format
                            case 'itemDate':
                                formObj[key] = dateFormatted;
                                break;
                            case 'itemDueDate':
                                formObj[key] = dateFormatted;
                                break;
                            default:
                                formObj[key] = value;
                        }
                    }
                    item.setTitle(formObj.itemTitle);
                    item.setNotes(formObj.itemNotes)
                    item.setDate(formObj.itemDate);
                    item.setDueDate(formObj.itemDueDate);
                    console.log(formObj);
                }

                const btn = document.createElement('button');
                btn.className = 'saveItemBtn';
                btn.type = 'submit';
                btn.value = 'Save Changes';
                btn.textContent = 'Save Changes';
                btn.addEventListener('click', onSubmit);

                return btn;
            })();

            // content that will show (expand) when item title is clicked
            const expandable = document.createElement('div');
            expandable.classList.add('itemInfo', 'contracted', 'hidden');
            expandable.append(notesInput, itemTaskListDiv, datesDiv, tagsDiv, saveBtn);

            tagifyInput(expandable.querySelector('.tagsInput'));
            
            // Load saved tags if they exist
            if (item._tags && item.tagify) {
                item.tagify.addTags(item._tags);
            }
            
            return expandable;
        }

        const itemInfoForm = createElement('form', 'todoItem');
        itemInfoForm.id = item.uuid;

        const checkbox = createCheckbox();

        let _titleType = 'input';
        const itemLabel = createLabel(_titleType);
        itemInfoForm.setAttribute('titleType', _titleType);
        

        const targetDiv = document.querySelector(query);
        
        itemInfoForm.append(checkbox, itemLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemInfoForm);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    function insertItemChangeListener(id, project) {
        const onItemSave = () => {
            project.populateLocalStorage();
        }

        const form = document.getElementById(id);
        const saveBtn = form.querySelector('.saveItemBtn');
        saveBtn.addEventListener('click', onItemSave);
    }

    const createButton = (buttonText, buttonClass, eventCallback) => {
        // "Create New Item" button
        const newBtn = createElement('button', buttonClass);
        newBtn.textContent = buttonText;
        newBtn.addEventListener('click', eventCallback);
        
        return newBtn;
    }

    return {
        insertProjectHeading,
        insertProjectItemForm,
        createElement,
        createButton,
        insertItemChangeListener
    };

    function displayProjects() {}
    
})();
