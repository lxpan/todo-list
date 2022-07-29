import buildProject from './project.js';
import view from './view.js';
import './style.css';

const defaultProject = buildProject();

const run = () => {
    view.insertProjectHeading('#content', defaultProject.name);
    // console.log(defaultProject.getUniqueTags());

    // enumerate items in default project
    Object.values(defaultProject.todoItems).forEach(item => {

        const completionToggleCallback = () => {        
            return function() {
                item.toggleCompletion();
            }
        }
        view.insertProjectItem('#content', item, completionToggleCallback);
    })

    // console.log(defaultProject.todoItems);
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
