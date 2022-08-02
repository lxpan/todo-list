import { v4 as uuidv4 } from 'uuid';

const tagMixin = {
    printTags () {
        console.log(`Tags: ${this.tags}`);
    },

    getTags () {
        let tagString = 'Tags: ';
        let isFirstTag = false;

        this.tags.forEach(tag => {
            if(!isFirstTag) {
                tagString += `${tag}`;
                isFirstTag = true;
            } else {
                tagString += `, ${tag}`;
            }
            
        })
        
        return tagString;
    },

    appendTag () {
        for (const [_, val] of Object.entries(arguments)) {
            if(typeof(val) == 'string') {
                this.tags.push(val);
            }
            else {
                console.log(`Non-string argument detected: ${val}`);
            }
        }
    },

    myFunc() {
        console.log('From tagProto');
    }
}

const checklistMixin = {
    printChecklist () {
        console.log(this.checklist);
    },
    addTask(task) {
        this.checklist.push(task);
    }
}

// using a closure to ensure a new itemTags Array is created every time this is called
const getDefaultArgs = function() {
    return {
        itemDate: 'Today', 
        itemDueDate: null, 
        itemTags: new Array(), 
        itemNotes: null, 
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
    const notes = def.itemNotes;
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
    let proto = Object.assign(tagMixin, checklistMixin);  // (targetObj, sourceObj)
    
    // creates a new object, using an existing object as its prototype of newly created object
    let todoItemObj = Object.create(proto);
    
    // "mix-in" methods defined in factory function
    todoItemObj = Object.assign(todoItemObj, factoryMethods);

    todoItemObj.title = title;
    todoItemObj.date = date;
    todoItemObj.dueDate = dueDate;
    todoItemObj.tags = tags;
    todoItemObj.checklist = _checklist;
    todoItemObj.completion = completion;
    todoItemObj.uuid = uuid;

    return todoItemObj;
}
