import buildProject from './project.js';
import view from './view.js';
import './style.css';


const setupHTML  = () => {
    const testHeading = document.createElement('h1');
    const content = document.createElement('div');
    content.id = 'content';
    testHeading.textContent = 'Todo List';
    
    document.body.append(testHeading, content);
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
