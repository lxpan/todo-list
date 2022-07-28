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
export default function todoItemFactory (itemTitle, itemDate='Today', itemDueDate=null, itemTags=[], itemNotes=null) {
    const title = itemTitle;
    const date = itemDate;
    const dueDate = itemDueDate;
    const tags = itemTags;
    const notes = itemNotes;
    const _checklist = [];

    const printSummary = () => {
        console.log(`
            Title: ${title},
            Date: ${date},
            Due Date: ${dueDate},
            Tags: ${tags},
            Notes: ${notes}.
            Checklist: ${_checklist}
        `);
    }

    const factoryMethods = {
        printSummary
    }

    // copies "tag" properties into "item" properties
    let proto = Object.assign(itemMixin, tagMixin, checklistMixin);  // (targetObj, sourceObj)
    
    // creates a new object, using an existing object as its prototype of newly created object
    let todoItemObj = Object.create(proto);
    
    // "mix-in" methods defined in factory function
    todoItemObj = Object.assign(todoItemObj, factoryMethods);

    todoItemObj.title = title;
    todoItemObj.date = date;
    todoItemObj.dueDate = dueDate;
    todoItemObj.tags = tags;
    todoItemObj.checklist = _checklist;

    return todoItemObj;
}

/*
export default function loadTodoItems() {
    // const t1 = todoItemFactory('Brush Teeth', 'For oral hygiene', '01/01/2023', ['Hygiene']);
    const t1 = todoItemFactory('Brush Teeth');
    const t2 = todoItemFactory('Take Shower', 'Tomorrow', '02/01/2023', ['Entertainment'], 'For overall hygiene');
    t1.appendTag('Leisure');
    // t1.printTags();
    t1.addTask('Buy new toothpaste');
    // t1.printChecklist();
    t1.addTask('Buy new toothbrush');
    t1.printChecklist();
    t1.printSummary();
    // t2.printSummary();
}
*/