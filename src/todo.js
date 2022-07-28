const itemMixin = {
    describe () {
        console.log(`Item ${this.title} is due by ${this.dueDate}`);
    },

    myFunc() {
        console.log('From itemProto');
    }
}

const tagMixin = {
    printTags () {
        console.log(`Tags: ${this.tags}`);        
    },

    appendTag (tag) {
        this.tags.push(tag);
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

// Responsibility: return/construct a todoItem object, which represents a single todo item
const todoItemFactory = (itemTitle, itemDate='Today', itemDueDate=null, itemTags=[], itemNotes=null) => {
    const title = itemTitle;
    const date = itemDate;
    const dueDate = itemDueDate;
    const tags = itemTags;
    const notes = itemNotes;
    const _checklist = [];

    const factoryMethods = {
    }

    // copies "tag" properties into "item" properties
    let proto = Object.assign(itemMixin, tagMixin, checklistMixin);  // (targetObj, sourceObj)
    
    // creates a new object, using an existing object as its prototype of newly created object
    let todoItemObj = Object.create(proto);
    
    // "mix-in" methods defined in factory function
    todoItemObj = Object.assign(todoItemObj, factoryMethods);

    todoItemObj.title = title;
    todoItemObj.dueDate = dueDate;
    todoItemObj.tags = tags;
    todoItemObj.checklist = _checklist;

    return todoItemObj;
}

export default function loadTodoItems() {
    // const t1 = todoItemFactory('Brush Teeth', 'For oral hygiene', '01/01/2023', ['Hygiene']);
    const t1 = todoItemFactory('Brush Teeth');
    const t2 = todoItemFactory('Take Shower', 'For overall hygiene', '02/01/2023', ['Entertainment']);
    t1.appendTag('Leisure');
    t1.printTags();
    t1.addTask('Buy new toothpaste');
    t1.printChecklist();
    t1.addTask('Buy new toothbrush');
    t1.printChecklist();
    console.log("------------------");

    // for (let key in t1) {
    //     if(t1.hasOwnProperty(key)) {
    //         console.log(key + " --> " + t1[key]);
    //     }
    // }

    t1.myFunc();
    t2.myFunc();
}
