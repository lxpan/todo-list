import todoItemFactory from './todo.js';
import FirestoreFactory from './Firestore.js';

const ffProject = FirestoreFactory();

class Project {
    notes;
    todoItems = {};

    constructor(name) {
        this.name = name;
    }

    // Convert todoItem Objects to JSON
    selectItemProperties() {
        const stringObjects = Object.values(this.todoItems).map(item => {
            const finalObj = {};
            
            const selectedProperties = (
                ({ title, notes, priority, checklist, date, dueDate, _tags, completion }) =>
                ({ title, notes, priority, checklist, date, dueDate, _tags, completion })
            )(item);

            finalObj[item.uuid] = selectedProperties;
            return finalObj;
        });
        return stringObjects;
    }

    // TODO: modify to use Firestore instead of localStorage
    saveItemChanges() {
        /* 
        Keys: this.name
        Values: todoItems object
        */
        const updatedItemsObj = {}
        const arrayOfObjects = this.selectItemProperties();

        for (const o of arrayOfObjects) {
            Object.assign(updatedItemsObj, o);
        }

        console.log(this.name);
        console.log(updatedItemsObj);
        console.log(updatedItemsObj.dueDate);

        // localStorage.setItem(this.name, JSON.stringify(updatedItemsObj));
        ffProject.saveProjectToFirestore(this.name, updatedItemsObj);
    }

    _reconstructTodoItemObjects(_parse) {
        // clear current todo items in project
        this.todoItems = {};
        for (const [key, value] of Object.entries(_parse)) {
            const item = todoItemFactory(value.title);

            // update remaining fields using setters
            item.setNotes(value.notes);
            item.setPriority(value.priority);
            item.setChecklist(value.checklist);
            item.setDate(value.date);
            item.setDueDate(value.dueDate);
            item.setTags(value._tags);
            item.setCompletion(value.completion);
            item.setUUID(key);
            // assign reconstructed object back to instance property
            this.todoItems[key] = item;
        }
        // console.log(this.todoItems);
    }

    // TODO: modify to use Firestore
    assignClassPropsFromObj(cachedStorage) {
        const projectItems = cachedStorage[this.name];
        // console.log(items);
        this._reconstructTodoItemObjects(projectItems);
    }

    addItem(title) {
        const item = todoItemFactory(title);
        // this.todoItems.push(item);
        this.todoItems[item.uuid] = item;
    }
    
    // TODO: modify to use Firestore
    deleteItem(uuid, projects) {
        if(this.todoItems[uuid]) {
            const itemStore = projects[this.name];
            // delete item from new project object and class property
            delete itemStore[uuid];
            delete this.todoItems[uuid];
            // upload modified project object to Firestore
            ffProject.saveProjectToFirestore(this.name, itemStore);
        } else {
            console.log(`Item: ${uuid} does not exist!`);
        }
    }

    get todoItems() {
        return this._todoItems;
    }

    /**
     * @param {string} text
     */
    set notes(text) {
        this._notes = text;
    }

    getUniqueTags() {
        const tags = Object.values(this.todoItems)
            .map(item => item.tags)
            .flat();

        const uniqueArray = Array.from(new Set(tags));
        return uniqueArray;
    }
}

export default function buildProject(name) {
    const p = new Project(name);
    return p;
}
