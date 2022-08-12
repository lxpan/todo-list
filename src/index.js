import buildProject from './project.js';
import view from './view.js';
import './style.css';


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
        const content = document.querySelector('#content');
        content.innerHTML = '';
        view.insertProjectHeading('#content', defaultProject.name);

        // repopulate list items from project
        Object.values(defaultProject.todoItems).forEach(item => {
            view.insertProjectItemForm('#content', item);
        });

        clickLastTodoItem();
    }

    const newItemBtn = view.createButton('+', 'newItemBtn', addNewItem)
    return newItemBtn;
}

const setupDebugBtn = () => {
    const logItemsInObject = () => {
        console.table(defaultProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', 'tags', 'completion', 'tagify']);
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

function setupHTML() {
    const gridContainer = view.createElement('div', 'gridContainer');
    const navbar = view.createElement('div', 'navbar');

    const projects = ['Project 1', 'Project 2', 'Project 3'];
    const projectList = document.createElement('ul');
    
    projects.forEach(project => {
        const projectItem = document.createElement('li');
        projectItem.textContent = project;
        projectList.appendChild(projectItem);

    });
    navbar.appendChild(projectList);

    const content = document.createElement('div');
    content.id = 'content';

    gridContainer.append(navbar, content);
    document.body.append(setupHeader(), gridContainer);
    
    view.insertProjectHeading('#content', defaultProject.name);
}

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

const run = () => {
    // enumerate items in default project
    Object.values(defaultProject.todoItems).forEach(item => {
        view.insertProjectItemForm('#content', item);
    });

    addMockTags(defaultProject.todoItems);

    // view.tagifyAll(defaultProject);
}

const defaultProject = buildProject();

setupMockProject();
setupHTML();
run();
