import todoItemFactory from './todo.js';

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
                ({ title, notes, checklist, date, dueDate, _tags, completion }) =>
                ({ title, notes, checklist, date, dueDate, _tags, completion })
            )(item);

            finalObj[item.uuid] = selectedProperties;
            return finalObj;
        });
        return stringObjects;
    }

    populateLocalStorage() {
        /* 
        Keys: this.name
        Values: todoItems object
        */
        const objectMerge = {}
        const arrayOfObjects = this.selectItemProperties();

        for (const o of arrayOfObjects) {
            Object.assign(objectMerge, o);
        }

        // console.log(objectMerge);

        localStorage.setItem(this.name, JSON.stringify(objectMerge));

        //    console.log(this.todoItems)
        //    console.log(objectStrings);
    }

    _reconstructTodoItemObjects(_parse) {
        // clear current todo items in project
        this.todoItems = {};
        for (const [key, value] of Object.entries(_parse)) {
            const item = todoItemFactory(value.title);

            // update remaining fields using setters
            item.setNotes(value.notes);
            item.setChecklist(value.checklist);
            item.setDate(value.date);
            item.setDueDate(value.dueDate);
            item.setTags(value._tags);
            item.setCompletion(value.completion);
            // assign reconstructed object back to instance property
            this.todoItems[key] = item;
        }
        // console.log(this.todoItems);
    }

    retrieveLocalStorage() {
        const parse = JSON.parse(localStorage.getItem(this.name));
        // console.log(parse);
        this._reconstructTodoItemObjects(parse);
    }

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
