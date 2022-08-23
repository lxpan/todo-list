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

                    const formElement = e.target.closest('.todoItem');
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

                const saveBtnContainer = createElement('div', 'saveBtnContainer');
                saveBtnContainer.appendChild(btn);

                return saveBtnContainer;
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
        const onItemSave = (e) => {
            const createSaveSpan = (msg) => {
                const messageContainer = document.createElement('div');
                const messageSpan = document.createElement('span');
                
                messageContainer.className = 'messageContainer';
                messageContainer.appendChild(messageSpan);
    
                messageSpan.textContent = msg;
                messageSpan.className = 'saveMessage';

                return messageContainer;
            }

            // Appends if msg element does not exist, otherwise replaces the element
            const smartAppendMessage = (msg) => {
                if(existingSaveMsg) {
                    // replace child of .messageContainer
                    existingSaveMsg.parentNode.replaceChild(createSaveSpan(msg), existingSaveMsg);
                } 
                else {
                    infoParent.appendChild(createSaveSpan(msg));
                }
            }

            project.populateLocalStorage();

            const infoParent = e.target.closest('.itemInfo');
            const existingSaveMsg = infoParent.querySelector('.saveMessage');            
            
            if(formChanged) {
                smartAppendMessage('Changes Saved');
                formChanged = false;
            } else {
                smartAppendMessage('No Changed Detected');
            }
        }
        
        let formChanged = false;
        const itemForm = document.getElementById(id);
        const saveBtn = itemForm.querySelector('.saveItemBtn');
        
        itemForm.addEventListener('change', () => {
            formChanged = true;
        });
        
        saveBtn.addEventListener('click', onItemSave);
    }

    const createButton = (buttonText, buttonClass, eventCallback) => {
        // "Create New Item" button
        const newBtn = createElement('button', buttonClass);
        newBtn.textContent = buttonText;
        newBtn.addEventListener('click', eventCallback);
        
        return newBtn;
    }

    const loremIpsum = (() => {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    })();

    const updateProjectList = (projectsObj) => {
        const listProjects = () => {
            const listOfProjects = createElement('ul', 'projectList');
            
            // Insert list of projects into DOM
            Object.keys(projectsObj).forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.id = project;
                projectItem.textContent = project;
                listOfProjects.appendChild(projectItem);
            });

            return listOfProjects;
        }
        
        const currentProjectList = document.querySelector('.projectList');
        currentProjectList.parentNode.replaceChild(listProjects(), currentProjectList);

    }
    
    const createModal = () => {
        const createModalForm = () => {
            const form = document.createElement('form');

            const fieldset = document.createElement('fieldset');
            const legend = document.createElement('legend');

            const nameLabel = document.createElement('label');
            const nameInput = document.createElement('input');
            const notesLabel = document.createElement('label');
            const notesInput = document.createElement('input');

            legend.textContent = 'Project Details';

            nameLabel.textContent = 'Name';
            nameInput.name = 'projectName';
            nameInput.type = 'text';

            notesLabel.textContent = 'Notes';
            notesInput.name = 'projectNotes';
            notesInput.type = 'text';

            fieldset.className = 'project-modal--details';
            fieldset.append(legend, nameLabel, nameInput, notesLabel, notesInput);
            form.appendChild(fieldset);
        
            return form;
        }

        const createModalContainer = () => {
            const modalContainer = createElement('div', 'modalContainer');
        
            const modal = createElement('div', 'modal');
            const modalHeading = createElement('div', 'project-modal--heading');
            const modalForm = createModalForm();
            const buttonGroup = document.createElement('div');
            const submitModalBtn = document.createElement('button');
            const closeModalBtn = document.createElement('button');
            
            
            modalContainer.id = 'modalContainer';
            modalForm.id = 'project-modal-form';
            submitModalBtn.id = 'submitModal';
            closeModalBtn.id = 'closeModal';
    
            modalHeading.textContent = 'Add Project';
    
            //type="submit" form="form1"
            submitModalBtn.textContent = 'Submit Modal';
            submitModalBtn.type = 'submit';
            submitModalBtn.setAttribute('form', 'project-modal-form');
            
            closeModalBtn.textContent = 'Close Modal';
            buttonGroup.append(submitModalBtn, closeModalBtn);
    
            modal.append(modalHeading, modalForm, buttonGroup);
            modalContainer.appendChild(modal);
            return modalContainer;    
        }

        return createModalContainer();
    }

    const addProjectFromModal = (e) => {
        e.preventDefault();
        const form = document.getElementById('project-modal-form');
        const formData = new FormData(form);
        const createProjectFunc = e.currentTarget.callbackFunc;
        const currentProjects = e.currentTarget.projects;

        let projectName = formData.get('projectName');
        let projectNotes = formData.get('projectNotes');

        createProjectFunc(projectName, projectNotes);
        updateProjectList(currentProjects);

        e.target.closest('#modalContainer').classList.remove('showModal');
    }

    function assignModalListener(addProjectCallback, projectsList) {
        const open = document.getElementById('openModal');
        const submit = document.getElementById('submitModal');
        const close = document.getElementById('closeModal');
        const modalContainer = document.getElementById('modalContainer');

        open.addEventListener('click', () => {
            modalContainer.classList.add('showModal');
        });

        submit.addEventListener('click', addProjectFromModal, false);
        submit.callbackFunc = addProjectCallback;
        submit.projects = projectsList;

        close.addEventListener('click', () => {
            modalContainer.classList.remove('showModal');
        });

        // console.log([open, submit, close, modalContainer]);
    }

    function setupHTML(config) {
        let currentProject = config.projects['Daily'].newProject;
    
        const clickLastTodoItem = () => {
            const items = document.querySelectorAll('.todoItem');
            const last = items[items.length - 1];
            
            const lastElementClickable =
                (last.getAttribute('titleType') == 'input')
                    ? last.querySelector("input[type='text']")
                    : last.querySelector('label');
            
            lastElementClickable.click();
        }
        
        const setNewItemBtn = () => {
            const addNewItem = () => {
                // add new item to project
                currentProject.addItem('');
        
                // clear current items and reset div
                const content = document.querySelector(CONTENT_DIV_SELECTOR);
                content.innerHTML = '';
                view.insertProjectHeading(CONTENT_DIV_SELECTOR, currentProject.name);
        
                // repopulate list items from project
                Object.values(currentProject.todoItems).forEach(item => {
                    view.insertProjectItemForm(CONTENT_DIV_SELECTOR, item);
                    view.insertItemChangeListener(item.uuid, currentProject);
                });
        
                clickLastTodoItem();
            }
        
            const newItemBtn = createButton('+', 'newItemBtn', addNewItem)
            return newItemBtn;
        }
        
        const setupDebugBtn = () => {
            const logItemsInObject = () => {
                console.table(currentProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', '_tags', 'completion', 'tagify']);
            }
            
            const logProjects = () => {
                console.log(projects);
            }
    
            const debugBtn = createButton('*', 'debugBtn', logProjects);
            return debugBtn;
        }
        
        const setupHeader = () => {
            const header = document.createElement('header');
            const testHeading = document.createElement('h1');
            testHeading.textContent = 'Todo List';
        
            header.append(testHeading, setNewItemBtn(), setupDebugBtn());
            return header;
        }
    
        const navbar = () => {
            const listProjects = () => {
                const listOfProjects = createElement('ul', 'projectList');
                
                // Insert list of projects into DOM
                Object.keys(config.projects).forEach(project => {
                    const projectItem = document.createElement('li');
                    projectItem.id = project;
                    projectItem.textContent = project;
                    listOfProjects.appendChild(projectItem);
                });
    
                return listOfProjects;
            }
    
            let projectList = listProjects();
            
            const navElement = createElement('div', 'navbar');
            const newProjectBtn = createButton('New Project', 'newProjectBtn', null);    
            newProjectBtn.id = 'openModal';    
    
            // todo: style and position new project button
            navElement.append(newProjectBtn, projectList);
            return navElement;
        }
        
        const gridContainer = createElement('div', 'gridContainer');
        const content = document.createElement('div');
        content.id = config.CONTENT_DIV_ID;
        
        gridContainer.append(navbar(), content);
        document.body.append(setupHeader(), gridContainer);
        
        insertProjectHeading(`#${config.CONTENT_DIV_ID}`, 'Replace with Project Name');
    }

    return {
        insertProjectHeading,
        insertProjectItemForm,
        createElement,
        createButton,
        insertItemChangeListener,
        createModal,
        assignModalListener,
        setupHTML
    };
})();
