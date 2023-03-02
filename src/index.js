import buildProject from './project.js'
import view from './view.js'
import './style.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiruh40D6_oqBcwZSwhrbVHIiJ0v2tRNA",
  authDomain: "todo-list-5556b.firebaseapp.com",
  projectId: "todo-list-5556b",
  storageBucket: "todo-list-5556b.appspot.com",
  messagingSenderId: "656016513916",
  appId: "1:656016513916:web:6495df170c62b5492ca2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Saves a new message to Cloud Firestore.
async function saveProject(name, projectJSON) {
    // Add a new message entry to the Firebase database.
    try {
      await addDoc(collection(getFirestore(), 'projects'), {
        name: name,
        json: projectJSON,
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
}


/* ---------- END Firebase Code ---------- */

function getLocalStorage() {
    // TODO: Retrieve from Firebase instead of localStorage
    return JSON.stringify(localStorage)
}

function writeLocalStorage(data) {
    // TODO: Write to Firestore instead of localStorage
    Object.keys(data).forEach(function (key) {
        localStorage.setItem(key, data[key])

    })
}

// TODO: Automatically upload this to Firebase if current db empty
const savedLocalStorageData = {
    Daily: '{"0652cbf2-c716-4236-a13e-05f04717851d":{"title":"Do the dishes","notes":"","priority":"Low","checklist":[],"date":"2022-08-31","_tags":["Cleaning"],"completion":false},"eb3a8045-382a-478c-886f-1e83f0cd76e0":{"title":"Shop for groceries","notes":"Woolworths -- remember specials","priority":"Medium","checklist":[],"date":"2022-08-31","_tags":["Errands"],"completion":false},"1e0a4e87-6761-49b9-9430-9fc7d95f933e":{"title":"Pay the bills","notes":"Bills are overdue","priority":"High","checklist":[],"_tags":[],"completion":false}}',
    Mining: '{"f2621369-5e3f-4c6a-95fa-2c516ad98870":{"title":"Open the mine","notes":"","priority":"High","checklist":[],"date":"2022-08-31","_tags":["Mining"],"completion":false},"ac95854a-66c7-4a4e-afe2-138fbf62689b":{"title":"Dig tunnel","notes":"","priority":"Medium","checklist":[],"_tags":["Mining"],"completion":false}}',
    Exercise:
        '{"59c6561c-1c6b-47ce-9002-a545bb2c0d47":{"title":"Lift weights","notes":"Get more swole","priority":"High","checklist":[],"_tags":[],"completion":false},"54a9f9db-48c5-4784-a7ab-0a715fe41403":{"title":"Run around the block","notes":"","priority":"Medium","checklist":[],"_tags":["Cardio"],"completion":false}}',
}

// instantiate project and load mock items
function projectRunner(projectName) {
    const name = projectName
    const newProject = buildProject(name)

    function addMockTags(items) {
        const todoItems = Object.values(items)
        todoItems[0].addTagifyTag('Errands')
        todoItems[1].addTagifyTag('Errands')
        todoItems[2].addTagifyTag('Fitness')
        todoItems[3].addTagifyTag(['Fitness', 'Study'])
    }

    function setupMockProject() {
        newProject.notes = 'Everyday tasks.'

        newProject.addItem('Mail parcel to Mum')
        newProject.addItem('Pay the bills')
        newProject.addItem('Run for 10 minutes')
        newProject.addItem('Study on the exercise bike')

        const itemValues = Object.values(newProject.todoItems)

        itemValues[0].notes = 'Needs to be done at the post office.'
        itemValues[0].addTask('Find item.')
        itemValues[0].addTask('Pack parcel.')
        itemValues[0].addTask('Mail parcel.')
    }

    // TODO: change to use Firestiore
    const loadMockItemsIntoDOM = () => {
        // only load from storage if key exists
        if (localStorage.getItem(newProject.name)) {
            newProject.retrieveLocalStorage()
        }

        view.insertProjectHeading(
            `#todoItemContainer`,
            DOM_CONFIG.currentProject.name,
            true
        )

        // enumerate items in default project
        Object.values(newProject.todoItems).forEach((item) => {
            view.insertProjectItemForm(`#todoItemContainer`, item)
            view.insertItemChangeListener(item.uuid, newProject)
        })
    }

    const run = () => {
        // TODO: change to use Firestore
        if (!localStorage.getItem(newProject.name)) {
            console.log('No stored data detected!')
            loadMockItemsIntoDOM()
            // setupMockProject();
            // loadMockItemsIntoDOM();
            // addMockTags(newProject.todoItems);
        } else {
            console.log('Stored data detected!')
            loadMockItemsIntoDOM()
        }
    }

    return {
        name,
        run,
        newProject,
    }
}

// TODO: load from Firestore
function loadStoredProjects() {
    for (const name of Object.keys(localStorage)) {
        const project = projectRunner(name)
        project.newProject.retrieveLocalStorage()

        if (!projects[name]) {
            projects[name] = project

            // if(notes) {
            //     projects[name].newProject.notes = notes;
            // }
        } else {
            // console.log(`A project named "${name}" already exists. Please try another name.`);
        }
    }
}

function addNewProject(name, notes = null) {
    const newProject = projectRunner(name)

    if (!projects[name]) {
        projects[newProject.name] = newProject

        if (notes) {
            projects[newProject.name].newProject.notes = notes
        }
    } else {
        console.log(
            `A project named "${name}" already exists. Please try another name.`
        )
    }
}

let projects = {}

const DOM_CONFIG = {
    projects: projects,
    TODO_CONTAINER: '#todoItemContainer',
}

function loadApp() {
    loadStoredProjects()

    addNewProject('Daily')
    // addNewProject('Empty');
    // addNewProject('Investigations');
    
    DOM_CONFIG['currentProject'] = DOM_CONFIG.projects['Daily'].newProject
    
    view.config = DOM_CONFIG
    view.bindConfiguration()
    view.setupHTML()
    
    projects['Daily'].run()
    
    document.body.appendChild(view.createModal())
    view.assignModalListener(addNewProject, projects)
    
    // clear localStorage
    localStorage.clear();
    // TODO: modify to use Firestore
    // write mock projects into localStorage for use by app
    if (Object.keys(localStorage).length == 0) {
        console.log('Local storage is empty!')
        // writeLocalStorage(savedLocalStorageData)
        Object.entries(savedLocalStorageData).forEach(([project, data]) => {
            saveProject(project, data);
            // console.log(project);
            // console.log(data);
        })
        // location.reload()
    } else {
        console.log(
            'Projects found in local storage. No loading of mock projects required'
        )
    }
}

loadApp();
