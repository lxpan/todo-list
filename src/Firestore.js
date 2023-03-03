// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiruh40D6_oqBcwZSwhrbVHIiJ0v2tRNA",
    authDomain: "todo-list-5556b.firebaseapp.com",
    projectId: "todo-list-5556b",
    storageBucket: "todo-list-5556b.appspot.com",
    messagingSenderId: "656016513916",
    appId: "1:656016513916:web:6495df170c62b5492ca2f9"
  };

export default function FirestoreFactory() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Saves a new message to Cloud Firestore.
    async function saveProjectToFirestore(projectName, projectJSON) {
        // Add new project entry to the Firebase database.
        try {
            const json = JSON.parse(projectJSON);
        await setDoc(doc(db, 'projects', projectName), {
            ...json,
        });
        }
        catch(error) {
        console.error('Error writing new project to Firebase Database', error);
        }
    }

    function uploadProjectsToFirestore(projectObjectStrings) {
        Object.entries(projectObjectStrings).forEach(([project, data]) => {
            saveProjectToFirestore(project, data);
            console.log(`${project} written to Firestore`);
        })
    }

    async function getProjects() {
        const finalObj = {}
        const projectsCol = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCol);
        const projectList = projectSnapshot.docs.map(doc => {
            // return doc.data();
            return {
                [doc.id]: doc.data(),
            }
                
        });
    
        projectList.forEach(project => Object.assign(finalObj, project));
        return finalObj;
    }

    return {
        saveProjectToFirestore,
        uploadProjectsToFirestore,
        getProjects
    }

}