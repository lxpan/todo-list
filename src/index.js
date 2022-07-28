import buildProject from './project.js';

const run = () => {
    const defaultProject = buildProject();

    function updateDOM() {

    }
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
