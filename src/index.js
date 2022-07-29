import buildProject from './project.js';
import view from './view.js';
import './style.css';

const defaultProject = buildProject();

const run = () => {
    view.insertProjectHeading('#content', defaultProject.name);
    // console.log(defaultProject.getUniqueTags());

    // enumerate items in default project
    Object.values(defaultProject.todoItems).forEach(item => {

        const toggleCompletionStatus = () => {
            // item['uuid'].setCompleted();
            return function() {
                // item.completion = true;
                item.toggleCompletion();
                // console.log(item);
            }
        }

        // console.log(item.printSummary());
        // view.insertProjectItem('#content', item.title, item.uuid, toggleCompletionStatus);
        view.insertProjectItem('#content', item, toggleCompletionStatus);
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
