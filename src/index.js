import buildProject from './project.js';
import view from './view.js';
import './style.css';

const setupHeader = () => {
    const header = document.createElement('header');
    const testHeading = document.createElement('h1');
    testHeading.textContent = 'Todo List';

    // "Create New Item" button
    const newItemBtn = view.createElement('button', 'newItemBtn');
    newItemBtn.textContent = '+';

    newItemBtn.addEventListener('click', () => {
        // add new item to project
        defaultProject.addItem('Test Insert Item');
        console.log(defaultProject.todoItems);

        // clear current items and reset div
        const content = document.querySelector('#content');
        content.innerHTML = '';
        view.insertProjectHeading('#content', defaultProject.name);

        // repopulate list items from project
        Object.values(defaultProject.todoItems).forEach(item => {
            view.insertProjectItemForm('#content', item);
        });
    
    })

    header.append(testHeading, newItemBtn);
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
    })

    // console.log(defaultProject.todoItems);
}

const defaultProject = buildProject();

setupHTML();
run();
