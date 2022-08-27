import buildProject from './project.js';
import view from './view.js';
import './style.css';


const CONTENT_DIV_ID = 'content';
const CONTENT_DIV_SELECTOR = `#${CONTENT_DIV_ID}`;

// currently selected project
// let currentProject = null;

// instantiate project and load mock items
function projectRunner(projectName) {
    const name = projectName;
    const newProject = buildProject(name);

    function addMockTags(items) {
        const todoItems = Object.values(items);
        todoItems[0].addTagifyTag('Errands');
        todoItems[1].addTagifyTag('Errands');
        todoItems[2].addTagifyTag('Fitness');
        todoItems[3].addTagifyTag(['Fitness', 'Study']);
    }
    
    function setupMockProject() {
        newProject.notes = 'Everyday tasks.';
    
        newProject.addItem('Mail parcel to Mum');
        newProject.addItem('Pay the bills');
        newProject.addItem('Run for 10 minutes');
        newProject.addItem('Study on the exercise bike');
    
        const itemValues = Object.values(newProject.todoItems);
    
        itemValues[0].notes = 'Needs to be done at the post office.'
        itemValues[0].addTask('Find item.');
        itemValues[0].addTask('Pack parcel.');
        itemValues[0].addTask('Mail parcel.');
    }

    const loadMockItemsIntoDOM = () => {
        // only load from storage if key exists
        if(localStorage.getItem(newProject.name)) {
            newProject.retrieveLocalStorage();
        }

        view.insertProjectHeading(`#todoItemContainer`, DOM_CONFIG.currentProject.name, true);
        
        // enumerate items in default project
        Object.values(newProject.todoItems).forEach(item => {
            view.insertProjectItemForm(`#todoItemContainer`, item);
            view.insertItemChangeListener(item.uuid, newProject);
        });

        
    }

    const run = () => {
        if(!localStorage.getItem(newProject.name)) {
            console.log('No stored data detected!');
            loadMockItemsIntoDOM();
            // setupMockProject();
            // loadMockItemsIntoDOM();
            // addMockTags(newProject.todoItems);
        } else {
            console.log('Stored data detected!');
            loadMockItemsIntoDOM();
        }
    }

    return {
        name,
        run,
        newProject
    }
}

function loadStoredProjects () {
    for (const [name, value] of Object.entries(localStorage)) {
        // console.log(`key: ${name}, value: ${projectParse}`);

        const project = projectRunner(name);
        project.newProject.retrieveLocalStorage();
        
        if(!projects[name]) {
            projects[name] = project;
    
            // if(notes) {
            //     projects[name].newProject.notes = notes;
            // }
        }
        else {
            // console.log(`A project named "${name}" already exists. Please try another name.`);
        }

        

    }



}

function addNewProject(name, notes=null) {
    const newProject = projectRunner(name);
    
    if(!projects[name]) {
        projects[newProject.name] = newProject;

        if(notes) {
            projects[newProject.name].newProject.notes = notes;
        }
        
    }
    else {
        console.log(`A project named "${name}" already exists. Please try another name.`);
    }
}

let projects = {}

const DOM_CONFIG = {
    'projects': projects,
    'CONTENT_DIV_ID': CONTENT_DIV_ID,
    'CONTENT_DIV_SELECTOR': CONTENT_DIV_SELECTOR,
    'TODO_CONTAINER': '#todoItemContainer'
}

loadStoredProjects();

// addNewProject('Daily');
// addNewProject('Empty');
// addNewProject('Investigations');

DOM_CONFIG['currentProject'] = DOM_CONFIG.projects['Daily'].newProject;

view.config = DOM_CONFIG;
view.bindConfig();
view.setupHTML();
// console.log(view.config);

projects['Daily'].run();

document.body.appendChild(view.createModal());
view.assignModalListener(addNewProject, projects);

loadStoredProjects();


// const projectBtn = document.querySelector('.newProjectBtn');
// projectBtn.click();
