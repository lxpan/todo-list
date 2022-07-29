import buildProject from './project.js';
import view from './view.js';
import './style.css';

const run = () => {
    const defaultProject = buildProject();
    
    view.insertProjectHeading('#content', defaultProject.name);

    // enumerate items in default project
    defaultProject.todoItems.forEach(item => {
        // console.log(item.printSummary());
        view.insertProjectItem('#content', item.title, item.uuid);
    })

    console.log(defaultProject.todoItems);
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
