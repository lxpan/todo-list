import { v4 as uuidv4 } from 'uuid';

const tagMixin = {
    getTags () {
        return this._tags;
    },

    updateTags () {
        if(this.tagify.value) {
            this._tags = this.tagify.value.map(x => x.value);
        }
    },

    addTagifyTag (t) {
        this.tagify.addTags(t);
    },

    // Used only to load tags for mock todoItems in project.js
    _appendTag () {
        for (const [_, val] of Object.entries(arguments)) {
            if(typeof(val) == 'string') {
                this._tags.push(val);
            }
            else {
                console.log(`Non-string argument detected: ${val}`);
            }
        }
    },
}

const checklistMixin = {
    printChecklist () {
        console.log(this.checklist);
    },
    addTask(task) {
        this.checklist.push(task);
    }
}

const setterMixin = {
    setTitle (title) {
        this.title = title;
    },

    setNotes (notes) {
        this.notes = notes;
    },

    setChecklist (checklist) {
        this.checklist = checklist;
    },

    setDate (date) {
        this.date = date;
    },

    setDueDate (dueDate) {
        this.dueDate = dueDate;
    },

    setTags (tags) {
        this._tags = tags;
    },

    setCompletion (completion) {
        this.completion = completion;
    },

    setUUID (id) {
        this.uuid = id;
    },

    setPriority (priority) {
        this.priority = priority;
    }
}

// functions used to logging and debugging purposes
const debugMixin = {
    printSummaryInObject () {
        return `
            Title: ${this.title},
            Date: ${this.date},
            Due Date: ${this.dueDate},
            Tags: ${this._tags},
            Notes: ${this.notes},
            Checklist: ${this._checklist},
            Completion: ${this.completion},
            UUID: ${this.uuid}
        `;
    }
}

// using a closure to ensure a new itemTags Array is created every time this is called
const getDefaultArgs = function() {
    return {
        itemDate: null, 
        itemDueDate: null, 
        itemTags: new Array(),
        itemTagify: null,
        itemNotes: null,
        itemPriority: null,
        itemChecklist: new Array(),
        itemCompletion: false,
    }
}

// Responsibility: return/construct a todoItem object, which represents a single todo item
export default function todoItemFactory(itemTitle, {...def} = getDefaultArgs()) {
    const title = itemTitle;
    const date = def.itemDate;
    const dueDate = def.itemDueDate;
    const tags = def.itemTags;
    const tagify = def.itemTagify;
    const notes = def.itemNotes;
    const priority = def.itemPriority;
    const _checklist = def.itemChecklist;
    let completion = def.itemCompletion;

    const uuid = uuidv4();

    const printSummary = () => {
        return `
            Title: ${title},
            Date: ${date},
            Due Date: ${dueDate},
            Tags: ${tags},
            Notes: ${notes},
            Checklist: ${_checklist},
            Completion: ${completion},
            UUID: ${uuid}
        `;
    }

    const toggleCompletion = function() {
        if(this.completion) {
            this.completion = false;
        } else {
            this.completion = true;
        }
    }

    const factoryMethods = {
        printSummary,
        toggleCompletion
    }

    // copies "tag" properties into "item" properties
    let proto = Object.assign(tagMixin, checklistMixin, setterMixin, debugMixin);  // (targetObj, sourceObj)
    
    // creates a new object, using an existing object as its prototype of newly created object
    let todoItemObj = Object.create(proto);
    
    // "mix-in" methods defined in factory function
    todoItemObj = Object.assign(todoItemObj, factoryMethods);

    todoItemObj.title = title;
    todoItemObj.date = date;
    todoItemObj.dueDate = dueDate;
    todoItemObj._tags = tags;
    todoItemObj.tagify = tagify;
    todoItemObj.checklist = _checklist;
    todoItemObj.completion = completion;
    todoItemObj.uuid = uuid;
    todoItemObj.priority = priority;

    return todoItemObj;
}
