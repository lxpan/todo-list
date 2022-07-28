import loadProject from './project.js';

const testHeading = document.createElement('h1');
testHeading.textContent = 'Todo List';
document.body.appendChild(testHeading);

loadProject();
