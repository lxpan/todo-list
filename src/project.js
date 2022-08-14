import todoItemFactory from './todo.js';

class Project {
    notes;
    todoItems = {};

    constructor(name) {
        this.name = name;
    }

    // Convert todoItem Objects to JSON
    stringifyItems() {
        const stringObjects = Object.values(this.todoItems).map(item => {
            const selectedProperties = (
                ({ title, notes, checklist, date, dueDate, _tags, completion, uuid}) =>
                ({ title, notes, checklist, date, dueDate, _tags, completion, uuid})
            )(item);
            return JSON.stringify(selectedProperties);
        });
        return stringObjects;
    }

    populateLocalStorage() {
        /* 
        Keys: this.name
        Values: todoItems object
        */
       
       ;
       const objectStrings = this.stringifyItems();
       localStorage.setItem(this.name, objectStrings);
       
       console.log(this.todoItems)
       console.log(objectStrings);
    }

    retrieveLocalStorage() {}

    addItem(title) {
        const item = todoItemFactory(title);
        // this.todoItems.push(item);
        this.todoItems[item.uuid] = item;
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
            .map(item => item.tags )
            .flat();

        const uniqueArray = Array.from(new Set(tags));
        return uniqueArray;
    }
}

export default function buildProject() {
    const p = new Project('Daily Tasks');
    return p;
}
