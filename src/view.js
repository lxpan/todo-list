import { format, addYears, subYears } from 'date-fns';

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
                // alert('Checked!');    
                item.toggleCompletion();
                console.log(item);
            } else {
                // alert('Not checked!');
                item.toggleCompletion();
                console.log(item);
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
                notes.name = 'notes';
                notes.div = 'notes';
                notes.defaultValue = (item.notes) ? item.notes : 'Notes';
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
                const date = createDateInput('Date: ', 'itemDate', null);
                // 'Figure Space' used in dueDate label to align the date pickers (see: https://qwerty.dev/whitespace/)
                const dueDate = createDateInput('Due: ', 'itemDueDate', '2023-01-01');
                dateElements.append(date, dueDate);
                return dateElements;
            })();

            const tagsDiv = (() => {
                const tags = document.createElement('div');
                tags.textContent = item.getTags();
                return tags;
            })();

            const saveBtn = (() => {
                const onSubmit = (e) => {
                    e.preventDefault();

                    const formElement = e.target.parentNode.parentNode;
                    const formData = new FormData(formElement);

                    for (let pair of formData.entries()) {
                        if (pair[0] == 'itemDueDate') {
                            let dateFormatted = format(new Date(pair[1]), 'dd-MM-yyyy');
                            console.log(`${pair[0]}: ${dateFormatted}`);
                        } else {
                            console.log(`${pair[0]}: ${pair[1]}`);
                        }
                        
                    }
                }


                const btn = document.createElement('button');
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
            
            return expandable;
        }

        const itemInfoForm = createElement('form', 'todoItem');
        // itemInfoForm.dataset.itemId = item.uuid;
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

    return {
        insertProjectHeading,
        // insertProjectItem,
        insertProjectItemForm,
        createElement
    };

    function displayProjects() {

    }
    
})();
