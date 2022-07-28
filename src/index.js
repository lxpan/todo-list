import buildProject from './project.js';

const run = () => {
    const defaultProject = buildProject();
}

const createHeading  = () => {
    const testHeading = document.createElement('h1');
    testHeading.textContent = 'Todo List';
    document.body.appendChild(testHeading);
}

createHeading();
run();
