import buildProject from './project.js';
import view from './view.js';
import './style.css';


const CONTENT_DIV_ID = 'content';
const CONTENT_DIV_SELECTOR = `#${CONTENT_DIV_ID}`;

// currently selected project
// let currentProject = null;

// Refactor away "defaultProject" usage
function setupHTML() {
    let currentProject = projects['Daily'].newProject;

    const clickLastTodoItem = () => {
        const items = document.querySelectorAll('.todoItem');
        const last = items[items.length - 1];
        
        const lastElementClickable =
            (last.getAttribute('titleType') == 'input')
                ? last.querySelector("input[type='text']")
                : last.querySelector('label');
        
        lastElementClickable.click();
    }
    
    const setNewItemBtn = () => {
        const addNewItem = () => {
            // add new item to project
            currentProject.addItem('');
    
            // clear current items and reset div
            const content = document.querySelector(CONTENT_DIV_SELECTOR);
            content.innerHTML = '';
            view.insertProjectHeading(CONTENT_DIV_SELECTOR, currentProject.name);
    
            // repopulate list items from project
            Object.values(currentProject.todoItems).forEach(item => {
                view.insertProjectItemForm(CONTENT_DIV_SELECTOR, item);
                view.insertItemChangeListener(item.uuid, currentProject);
            });
    
            clickLastTodoItem();
        }
    
        const newItemBtn = view.createButton('+', 'newItemBtn', addNewItem)
        return newItemBtn;
    }
    
    const setupDebugBtn = () => {
        const logItemsInObject = () => {
            console.table(currentProject.todoItems, ['title', 'notes', 'date', 'dueDate', 'checklist', '_tags', 'completion', 'tagify']);
        }
    
        const debugBtn = view.createButton('*', 'debugBtn', logItemsInObject);
        return debugBtn;
    }
    
    const setupHeader = () => {
        const header = document.createElement('header');
        const testHeading = document.createElement('h1');
        testHeading.textContent = 'Todo List';
    
        header.append(testHeading, setNewItemBtn(), setupDebugBtn());
        return header;
    }

    const navbar = () => {
        const addProject = () => {
            // addNewProject('Foobar123');
            // const nav = document.querySelector('.navbar');
            // const currentList = document.querySelector('.projectList');

            // nav.replaceChild(listProjects(), currentList);
            // console.log(projects);


        }

        const listProjects = () => {
            const listOfProjects = view.createElement('ul', 'projectList');
            
            // Insert list of projects into DOM
            Object.keys(projects).forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.id = project;
                projectItem.textContent = project;
                listOfProjects.appendChild(projectItem);
            });

            return listOfProjects;
        }

        let projectList = listProjects();
        
        const navElement = view.createElement('div', 'navbar');
        const newProjectBtn = view.createButton('New Project', 'newProjectBtn', addProject);    
        newProjectBtn.id = 'openModal';    

        // todo: style and position new project button
        navElement.append(newProjectBtn, projectList);
        return navElement;
    }
    
    const gridContainer = view.createElement('div', 'gridContainer');
    const content = document.createElement('div');
    content.id = CONTENT_DIV_ID;
    
    gridContainer.append(navbar(), content);
    document.body.append(setupHeader(), gridContainer);
    
    view.insertProjectHeading(`#${CONTENT_DIV_ID}`, 'Replace with Project Name');
}

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
        newProject.notes = 'My food journal';
    
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
        
        // enumerate items in default project
        Object.values(newProject.todoItems).forEach(item => {
            view.insertProjectItemForm(`#${CONTENT_DIV_ID}`, item);
            view.insertItemChangeListener(item.uuid, newProject);
        });
    
        addMockTags(newProject.todoItems);
    }

    const run = () => {
        setupMockProject();
        loadMockItemsIntoDOM();
    }

    return {
        name,
        run,
        newProject
    }
}

function addNewProject(name) {
    const newProject = projectRunner(name);
    
    if(!projects[name]) {
        projects[newProject.name] = newProject;
    }
    else {
        console.log(`A project named "${name}" already exists. Please try another name.`);
    }
}

let projects = {}

addNewProject('Daily');
addNewProject('Empty');
addNewProject('Investigations');

setupHTML();
projects['Daily'].run();

console.log(Object.keys(projects));

document.body.appendChild(view.createModal());
