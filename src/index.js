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
        console.table(defaultProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', 'tags', 'completion']);
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

const setupHTML  = () => {
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
}

const run = () => {
    view.insertProjectHeading('#content', defaultProject.name);
    // console.log(defaultProject.getUniqueTags());

    // enumerate items in default project
    Object.values(defaultProject.todoItems).forEach(item => {
        view.insertProjectItemForm('#content', item);
    });

    view.tagifyAll(defaultProject);

    // console.log(defaultProject.todoItems);
}

const defaultProject = buildProject();

setupHTML();
run();
