import buildProject from './project.js';
import view from './view.js';
import './style.css';

const setupHeader = () => {
    const header = document.createElement('header');
    const testHeading = document.createElement('h1');
    testHeading.textContent = 'Todo List';

    // "Create New Item" button
    const newItemBtn = document.createElement('button');
    newItemBtn.className = 'newItemBtn';
    newItemBtn.textContent = '+';

    header.append(testHeading, newItemBtn);
    return header;
}


const setupHTML  = () => {
    const gridContainer = document.createElement('div');
    gridContainer.className = 'gridContainer';
    const navbar = document.createElement('div');
    
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
        view.insertProjectItem('#content', item);
    })

    // console.log(defaultProject.todoItems);
}

const defaultProject = buildProject();

setupHTML();
run();
