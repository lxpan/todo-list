import buildProject from './project.js';
import view from './view.js';
import './style.css';


const CONTENT_DIV_ID = 'content';
const CONTENT_DIV_SELECTOR = `#${CONTENT_DIV_ID}`;


function setupHTML() {
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
            defaultProject.addItem('');
            // console.log(defaultProject.todoItems);
    
            // clear current items and reset div
            const content = document.querySelector(CONTENT_DIV_SELECTOR);
            content.innerHTML = '';
            view.insertProjectHeading(CONTENT_DIV_SELECTOR, defaultProject.name);
    
            // repopulate list items from project
            Object.values(defaultProject.todoItems).forEach(item => {
                view.insertProjectItemForm(CONTENT_DIV_SELECTOR, item);
                view.insertItemChangeListener(item.uuid, defaultProject);
            });
    
            clickLastTodoItem();
        }
    
        const newItemBtn = view.createButton('+', 'newItemBtn', addNewItem)
        return newItemBtn;
    }
    
    const setupDebugBtn = () => {
        const logItemsInObject = () => {
            console.table(defaultProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', '_tags', 'completion', 'tagify']);
        }
    
        const debugBtn = view.createButton('*', 'debugBtn', logItemsInObject);
        return debugBtn;
    }
    
    const setupHeader = () => {
        const header = document.createElement('header');
        const testHeading = document.createElement('h1');
        testHeading.textContent = 'Todo List';
    
        header.append(testHeading, setNewItemBtn(), setupDebugBtn());
        return header;
    }
    
    const gridContainer = view.createElement('div', 'gridContainer');
    const navbar = view.createElement('div', 'navbar');
    const projectList = document.createElement('ul');
    const content = document.createElement('div');
    
    content.id = CONTENT_DIV_ID;
    
    // Insert todo items into the DOM
    Object.keys(projects).forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project;
        projectList.appendChild(projectItem);
    });

    navbar.appendChild(projectList);
    gridContainer.append(navbar, content);
    document.body.append(setupHeader(), gridContainer);
    
    view.insertProjectHeading(`#${CONTENT_DIV_ID}`, 'Replace with Project Name');
}


function projectRunner(projectName) {
    const name = projectName;
    const defaultProject = buildProject(name);

    function addMockTags(items) {
        const todoItems = Object.values(items);
        todoItems[0].addTagifyTag('Errands');
        todoItems[1].addTagifyTag('Errands');
        todoItems[2].addTagifyTag('Fitness');
        todoItems[3].addTagifyTag(['Fitness', 'Study']);
    }
    
    function setupMockProject() {
        defaultProject.notes = 'My food journal';
    
        defaultProject.addItem('Mail parcel to Mum');
        defaultProject.addItem('Pay the bills');
        defaultProject.addItem('Run for 10 minutes');
        defaultProject.addItem('Study on the exercise bike');
    
        const itemValues = Object.values(defaultProject.todoItems);
    
        itemValues[0].notes = 'Needs to be done at the post office.'
        itemValues[0].addTask('Find item.');
        itemValues[0].addTask('Pack parcel.');
        itemValues[0].addTask('Mail parcel.');
        // itemValues[0].setCompleted();
        // itemValues[3].appendTag('Fitness', 'Study', 123);
        // console.log(defaultProject.getUniqueTags());       
        // console.log(defaultProject.todoItems);
    }
    
    const loadMockItemsIntoDOM = () => {
        // only load from storage if key exists
        if(localStorage.getItem(defaultProject.name)) {
            defaultProject.retrieveLocalStorage();
        }
        
        // enumerate items in default project
        Object.values(defaultProject.todoItems).forEach(item => {
            view.insertProjectItemForm(`#${CONTENT_DIV_ID}`, item);
            view.insertItemChangeListener(item.uuid, defaultProject);
        });
    
        addMockTags(defaultProject.todoItems);
    
        // view.tagifyAll(defaultProject);
    }

    const run = () => {
        setupMockProject();
        loadMockItemsIntoDOM();
    }

    return {
        name,
        run,
        defaultProject
    }
}

function addNewProject(name) {
    const newProject = projectRunner(name);
    projects[newProject.name] = newProject;
}

let projects = {}
// the currently selected project
let defaultProject = projects['Daily'];

addNewProject('Daily');
addNewProject('Empty');
addNewProject('Investigations');

setupHTML();
projects['Daily'].run();

console.log(Object.keys(projects));
