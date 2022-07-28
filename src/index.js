import buildProject from './project.js';

const run = () => {
    const defaultProject = buildProject();

    // enumerate items in default project
    defaultProject.todoItems.forEach(item => {
        let itemString = item.printSummary();
        updateDOM(itemString);
    })
}

function updateDOM(textToUpdate) {
    const contentDiv = document.getElementById('content');
    const newItem = document.createElement('div');
    newItem.textContent = textToUpdate;
    contentDiv.appendChild(newItem);
}

const setupHTML  = () => {
    const testHeading = document.createElement('h1');
    const content = document.createElement('div');
    content.id = 'content';
    testHeading.textContent = 'Todo List';
    
    document.body.append(testHeading, content);
}

setupHTML();
run();
