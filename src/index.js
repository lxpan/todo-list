import loadProject from './project.js';

const run = () => {
    const defaultProject = loadProject();
}

const createHeading  = () => {
    const testHeading = document.createElement('h1');
    testHeading.textContent = 'Todo List';
    document.body.appendChild(testHeading);
}

createHeading();
run();
