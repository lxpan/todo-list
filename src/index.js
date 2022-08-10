import buildProject from './project.js';
import view from './view.js';
import './style.css';

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

        const items = document.querySelectorAll('.todoItem');
        const last = items[items.length - 1];
        // console.log(last);
        
        const lastElementClickable =
            (last.getAttribute('titleType') == 'input')
                ? last.querySelector("input[type='text']")
                : last.querySelector('label');
        
        lastElementClickable.click();
    }

    const newItemBtn = view.createButton('+', 'newItemBtn', addNewItem)
    return newItemBtn;
}

function debugCallback() {
    console.log(defaultProject.todoItems);
    for (const item of Object.values(defaultProject.todoItems)) {
        console.log(item.printSummaryInObject());
    }
}

const createDebugBtn = () => {
        // "Create New Item" button
        const debugBtn = view.createElement('button', 'debugBtn');
        debugBtn.textContent = '*';

        debugBtn.addEventListener('click', debugCallback);

        return debugBtn;
}

const setupHeader = () => {
    const header = document.createElement('header');
    const testHeading = document.createElement('h1');
    testHeading.textContent = 'Todo List';

    header.append(testHeading, setNewItemBtn(), createDebugBtn());
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

    // console.log(defaultProject.todoItems);
}

const defaultProject = buildProject();

setupHTML();
run();
