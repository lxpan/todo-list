import buildProject from './project.js';
import view from './view.js';

const run = () => {
    const defaultProject = buildProject();
    console.log(view);
    view.updateProjectName('#content', defaultProject.name);

    // enumerate items in default project
    defaultProject.todoItems.forEach(item => {
        let itemString = item.printSummary();
        view.updateProjectTodoItems('#content', itemString);
    })
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
