import buildProject from './project.js';
import view from './view.js';
import './style.css';


const setupHTML  = () => {
    const testHeading = document.createElement('h1');
    const content = document.createElement('div');
    content.id = 'content';
    testHeading.textContent = 'Todo List';
    
    

    // "Create New Item" button
    const newItemBtn = document.createElement('button');
    newItemBtn.className = 'newItemBtn';
    newItemBtn.textContent = '+';

    document.body.append(testHeading, newItemBtn, content);
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
