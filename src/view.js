import FirestoreFactory from './Firestore';
import { format, addYears, subYears, parseISO } from 'date-fns';
// Import Tagify
import Tagify from '@yaireo/tagify';
import '@yaireo/tagify/dist/tagify.css';

// Images
import plantImg from './images/plant.png';
import forestImg from './images/forest.png';
import beaverImg from './images/beaver.png';
import lumberjackImg from './images/lumberjacking.png';
import sunriseImg from './images/sunrise.png';

const ffView = FirestoreFactory();

export default (function view() {
    let elementID = 0;
    let config = null;
    let projectsProp = null;

    function bindConfiguration() {
        config = this.config;
        // console.log(config);
    }

    function bindProjectsProp() {
        projectsProp = this.projectsProp;
    }

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

    function createNavAction(src, text, listenerFunc) {
        const actionDiv = document.createElement('a');
        const actionIcon = new Image();
        const actionText = document.createElement('span');

        actionIcon.src = src;
        actionText.textContent = text;

        actionDiv.className = 'navbar--action__button newItemBtn';
        actionDiv.href = '#';
        actionDiv.append(actionIcon, actionText);
        actionDiv.addEventListener('click', listenerFunc);

        return actionDiv;
    }

    function createImageButton(src, className, listenerFunc) {
        const newItemBtn = document.createElement('input');
        newItemBtn.type = 'image';
        newItemBtn.src = src
        newItemBtn.name = className;
        newItemBtn.addEventListener('click', listenerFunc);
        newItemBtn.className = className;
        return newItemBtn;
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

    function insertProjectHeading(query, projectName, replace=false) {
        const targetDiv = document.querySelector(query);
        const headingFlexContainer = createElement('div', 'project--heading__container');
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;

        headingFlexContainer.appendChild(projectHeading);

        const currentHeadingContainer = document.querySelector('.project--heading__container');

        if(replace && currentHeadingContainer) {
            targetDiv.replaceChild(headingFlexContainer, currentHeadingContainer);
        } else {
            targetDiv.appendChild(headingFlexContainer);
        }
    }

    function insertProjectItemForm(query, item) {
        // callback function for the 'todo' checkbox
        const toggleItemCompletionOnClick = (e) => {
            const projectName = config.currentProject.name;
            const itemId = item.uuid;
            // const projectStore = JSON.parse(localStorage.getItem(project));
            const projectStore = projectsProp[projectName];
            console.log(projectStore);

            item.toggleCompletion();
            projectStore[itemId].completion = item.completion;
            // update stored data with new completion status
            localStorage.setItem(projectName, JSON.stringify(projectStore));
        }

        const createCheckbox = () => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.name = 'itemCompletion';
            input.id = elementID; // link "id" and "for"

            if(item.completion) {
                input.checked = true;
            }
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
                    item.updateTags();
                }
            }

            const priorityDropdown = (() => {
                const priorityDiv = createElement('div', 'priorityDropdown');
                const label = document.createElement('label');
                const dropdown = document.createElement('select');
                const priorities = ['Select Priority', 'Low', 'Medium', 'High'];

                dropdown.name = 'itemPriority';
                label.setAttribute('for', 'priority');
                label.textContent = 'Priority: ';

                priorities.forEach(priority => {
                    const option = document.createElement('option');
                    option.value = priority;
                    option.textContent = priority;
                    dropdown.appendChild(option);
                });

                if (item.priority) {
                    let filter = Array.from(dropdown).filter(option => option.value == item.priority);
                    console.assert(filter.length == 1);
                    filter[0].selected = true;
                }

                priorityDiv.append(label, dropdown);
                return priorityDiv;
            })();

            const saveBtn = (() => {
                const saveFormDataToMemory = (e) => {
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
                    item.setNotes(formObj.itemNotes);
                    item.setPriority(formObj.itemPriority);
                    item.setDate(formObj.itemDate);
                    item.setDueDate(formObj.itemDueDate);
                    item.setCompletion( (formObj.itemCompletion) ? true : false );
                    console.log(formObj);
                }

                const btn = document.createElement('button');
                btn.className = 'saveItemBtn';
                btn.type = 'submit';
                btn.value = 'Save Changes';
                btn.textContent = 'Save Changes';
                
                btn.addEventListener('click', saveFormDataToMemory);
                return btn;
            })();

            const deleteBtn = (() => {
                const deleteItem = (e) => {
                    e.preventDefault();
                    const itemId = e.target.closest('.todoItem').id;
                    config.currentProject.deleteItem(itemId);

                    const todoContainer = document.querySelector(config.TODO_CONTAINER);
                    todoContainer.innerHTML = '';
                    // this is clumsy - is there a better solution?
                    config.projects[config.currentProject.name].run();

                }
                // refresh project numItems on create or delete
                const deleteBtn = createButton('Delete Item', 'deleteItemBtn', deleteItem);
                deleteBtn.addEventListener('click', updateProjectList());

                return deleteBtn;
            })();

            const buttonGroup = createElement('div', 'itemButtonGroup');
            buttonGroup.append(deleteBtn, saveBtn);

            // content that will show (expand) when item title is clicked
            const expandable = document.createElement('div');
            expandable.classList.add('itemInfo', 'contracted', 'hidden');
            expandable.append(notesInput, priorityDropdown, itemTaskListDiv, datesDiv, tagsDiv, buttonGroup);

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
        const priorityLabel = createElement('span', 'todoItem--priority__label');
        const priorityText = createElement('span', 'todoItem--priority__text');
        priorityText.textContent = item.priority;
        
        switch (item.priority) {
            case 'High':
                priorityLabel.classList.add('high');
                break;
            case 'Medium':
                priorityLabel.classList.add('medium');
                break;
            case 'Low':
                priorityLabel.classList.add('low');
                break;
            default:
                priorityLabel.classList.add('noneSelected');
                break;
        }

        priorityLabel.append(priorityText);
        
        const itemLabel = createLabel(_titleType);
        itemInfoForm.setAttribute('titleType', _titleType);
        

        const targetDiv = document.querySelector(query);
        
        itemInfoForm.append(checkbox, itemLabel, priorityLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemInfoForm);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    function insertItemChangeListener(id, project) {
        const showItemSavedMessageOnFormChange = (e) => {
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
                triggerItemListRefresh();
                formChanged = false;
            } else {
                smartAppendMessage('No Changed Detected');
            }

            updateProjectList();
        }

        const triggerItemListRefresh = () => {
            const currentItems = document.querySelectorAll('.todoItem');

            currentItems.forEach(item => {
                item.remove();
            });

            // insert todo items again
            config.projects[config.currentProject.name].run();
        }
        
        let formChanged = false;
        const itemForm = document.getElementById(id);
        const saveBtn = itemForm.querySelector('.saveItemBtn');
        
        itemForm.addEventListener('change', () => {
            formChanged = true;
        });
        
        [showItemSavedMessageOnFormChange].forEach(listener => {
            saveBtn.addEventListener('click', listener);
        })
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

    function removeHeadings() {
        const projectHeadings = document.querySelectorAll('.project--heading__container');
    
        projectHeadings.forEach(node => {
            node.remove();
        });

        const todayTitle = document.querySelector('.today--title');
        todayTitle.remove();

    }

    function switchProject(e) {
        const projectClicked = e.target.parentNode.id;
        const projectOnDisplay = config.currentProject;

        if (projectOnDisplay.name != projectClicked) {
            console.log(config.currentProject);
            
            if(config.currentProject == '__today') {
                console.log('Remove headings!');
                removeHeadings();
            }

            // switch global focus to clicked project
            config.currentProject = config.projects[projectClicked].newProject;

            // remove existing todoItems
            const currentItems = document.querySelectorAll('.todoItem');

            currentItems.forEach(item => {
                item.remove();
            });
            
            // run this project (populate todo items)
            config.projects[projectClicked].run();
            // assign currentProject to clicked project
            config.currentProject = config.projects[projectClicked].newProject;
        } else {
            console.log("Project is already displayed!");
        }
    }

    function refreshProjectsList() {
        const listOfProjects = createElement('ul', 'projectList');
        listOfProjects.className = 'navbar--projects__links';

        const projectsTitle = createElement('h2', 'navbar--projects__title');
        projectsTitle.textContent = 'Projects';

        listOfProjects.appendChild(projectsTitle);
        
        // Insert list of projects into DOM
        Object.keys(config.projects).forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.id = project;
            projectItem.className = 'project--signpost';

            // console.log(`Project: ${project}`);
            // console.log(projectsProp);
            const projectItemStore = projectsProp[project];
            const numItemsInProject = (projectItemStore) ? Object.keys(projectItemStore).length : 0;

            const link = document.createElement('a');
            link.textContent = `${project} :: ${numItemsInProject}`;
            link.href = '#';
            link.addEventListener('click', switchProject);
            
            projectItem.appendChild(link);
            listOfProjects.appendChild(projectItem);
        });

        return listOfProjects;
    }

    const updateProjectList = () => {
        const currentProjectList = document.querySelector('.navbar--projects__links');
        currentProjectList.parentNode.replaceChild(refreshProjectsList(), currentProjectList);
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
            const buttonGroup = createElement('div', 'project--modal__buttons');
            const submitModalBtn = document.createElement('button');
            const closeModalBtn = document.createElement('button');
            
            
            modalContainer.id = 'modalContainer';
            modalForm.id = 'project-modal-form';
            submitModalBtn.id = 'submitModal';
            closeModalBtn.id = 'closeModal';
    
            modalHeading.textContent = 'Add Project';
    
            submitModalBtn.textContent = 'Accept';
            submitModalBtn.type = 'submit';
            submitModalBtn.setAttribute('form', 'project-modal-form');
            
            closeModalBtn.textContent = 'Cancel';
            buttonGroup.append(closeModalBtn, submitModalBtn);
    
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

        let projectName = formData.get('projectName');
        let projectNotes = formData.get('projectNotes');

        createProjectFunc(projectName, projectNotes);
        updateProjectList();

        e.target.closest('#modalContainer').classList.remove('showModal');

        // switch to new project with default empty item
        const newProjectLink = document.querySelector(`#${projectName} > a`);
        const newItemBtn = document.querySelector('.newItemBtn');
        newProjectLink.click();
        newItemBtn.click();
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
    }

    function priorityToInteger(priority) {
        const weights = {
            'High': 3,
            'Medium': 2,
            'Low': 1,
            'Select Priority': 0
        }

        return weights[priority];
    }

    function setupHTML() {
        let currentProject = config.currentProject;
    
        const clickLastTodoItem = () => {
            const items = document.querySelectorAll('.todoItem');
            const last = items[items.length - 1];
            
            const lastElementClickable =
                (last.getAttribute('titleType') == 'input')
                    ? last.querySelector("input[type='text']")
                    : last.querySelector('label');
            
            lastElementClickable.click();
        }

        // today date hardcoded to '2022-08-30'
        const setupShowTodayBtn = () => {
            const listTodayItems = () => {
                const currentDate = '2022-08-31';
                const todayItems = {}

                /* name: project name
                value: projectRunner object properties (name, run(), etc) */
                for (let [name, value] of Object.entries(config.projects)) {                    
                    const todo = Object.values(value.newProject.todoItems);
                    const f = todo.filter(item => item.date == currentDate);
                    const itemsFiltered = {}
                    f.forEach(item => {
                        itemsFiltered[item.uuid] = item;
                    });
                    if (Object.values(itemsFiltered).length > 0 ) {
                        todayItems[name] = itemsFiltered
                    }
                }

                console.log(todayItems);
                
                const content = document.getElementById('todoItemContainer');
                content.innerHTML = '';

                const todayDiv = createElement('div', 'today--title');
                const todayHeading = createElement('span', 'today--title__heading');
                const todayDate = createElement('span', 'today--title__date');
                todayHeading.textContent = 'Today';
                todayDate.textContent = 'Wed Aug 31';
                todayDiv.append(todayHeading, todayDate);
                content.appendChild(todayDiv);

                // value = object containing project's todoItems
                for (let [name, value] of Object.entries(todayItems)) {
                    insertProjectHeading(`#todoItemContainer`, name);
                    
                    for (let [id, item] of Object.entries(value)) {
                        insertProjectItemForm(`#todoItemContainer`, item);
                        insertItemChangeListener(id, config.projects[name].newProject);
                    }
                }
                
                config.currentProject = '__today';
            }
            

            return createNavAction(sunriseImg, 'Today', listTodayItems);
        }
        
        const setNewItemBtn = () => {
            const addNewItem = () => {
                if(config.currentProject == '__today') {
                    alert('Item creation disabled in Today section. Please navigate to the individual projects.');
                    return;
                }

                const currentProject = config.currentProject;
                // add new item to project
                currentProject.addItem('');
        
                // clear current items and reset div
                const todoItemContainer = document.querySelector(config.TODO_CONTAINER);
                todoItemContainer.innerHTML = '';
                insertProjectHeading(config.TODO_CONTAINER, currentProject.name);
        
                // repopulate list items from project
                Object.values(currentProject.todoItems).forEach(item => {
                    insertProjectItemForm(config.TODO_CONTAINER, item);
                    insertItemChangeListener(item.uuid, currentProject);
                });
        
                clickLastTodoItem();
            }

            return createNavAction(plantImg, 'Grow Todo Item', addNewItem);
        }
        
        const setupDebugBtn = () => {
            const logItemsInObject = () => {
                console.table(currentProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', '_tags', 'completion', 'tagify']);
            }
            
            const logProjects = () => {
                console.log(config.projects);
            }

            const logDefaultProjectItems = () => {
                console.log(config.currentProject.todoItems);
            }
    
            return createNavAction(beaverImg, 'Log JSON', logProjects);
        }

        const setupDeleteProjectBtn = () => {
            const deleteProject = (e) => {
                const current = config.currentProject.name;
                    if (projectsProp[current]) {
                    const confirmationText = `Are you sure you want to delete project ${current}? Deletion is final.`;
                    
                    if (confirm(confirmationText) == true) {
                        console.log(`User initiated deletion of ${current}.`);
                        localStorage.removeItem(current);

                        delete projectsProp[current];
                        console.log(projectsProp);

                        // write new modified object to Firestore

                        // console.log(current);
                        // console.log(newProjectObj);
                        
                        // location.reload();
                        // console.log(`Project "${current}" exists in localstorage!`);
                    } else {
                        console.log('User cancelled deletion!');
                    }
                } else {
                    console.log(`Project "${current}" not found!`);
                }
            }

            return createNavAction(lumberjackImg, 'Delete Project', deleteProject);
        }
        
        const setupHeader = () => {
            const header = document.createElement('header');
            const appHeading = createElement('h1', 'app--heading');
            const iconSpan = document.createElement('span');

            appHeading.textContent = 'Forests - a todo app';
            iconSpan.className = "material-symbols-outlined";
            iconSpan.textContent = 'forest';
        
            header.append(iconSpan, appHeading);
            return header;
        }
    
        const navbar = () => {
            const navContainer = createElement('div', 'navbar');

            // create action buttons
            const navbarActionContainer__Top = createElement('div', 'navbar--actions__top');
            const navBarActionContainer__Bottom = createElement('div', 'navbar--actions__bottom');
            
            const newProjectBtn = createNavAction(forestImg, 'Plant Project', null);
            newProjectBtn.id = 'openModal';

            navbarActionContainer__Top.append(setupShowTodayBtn(), setNewItemBtn(), newProjectBtn, setupDebugBtn());
            navBarActionContainer__Bottom.appendChild(setupDeleteProjectBtn());
    
            // todo: style and position new project button
            navContainer.append(navbarActionContainer__Top, refreshProjectsList(), navBarActionContainer__Bottom);
            return navContainer;
        }
        
        const gridContainer = createElement('div', 'gridContainer');
        const content = document.createElement('div');
        content.id = config.CONTENT_DIV_ID;

        const todoItemContainer = document.createElement('div');
        todoItemContainer.id = 'todoItemContainer';

        content.appendChild(todoItemContainer);
        
        gridContainer.append(navbar(), content);
        document.body.append(setupHeader(), gridContainer);
    }

    return {
        insertProjectHeading,
        insertProjectItemForm,
        createElement,
        createButton,
        insertItemChangeListener,
        createModal,
        assignModalListener,
        setupHTML,
        bindConfiguration,
        bindProjectsProp
    };
})();
