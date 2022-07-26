import loadTodoItems from './todo.js';

const testHeading = document.createElement('h1');
testHeading.textContent = 'Todo List';
document.body.appendChild(testHeading);

loadTodoItems();
