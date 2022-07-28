const itemProto = {
    describe () {
        console.log(`Item ${this.title} is due by ${this.dueDate}`);
    },

    myFunc() {
        console.log('From itemProto');
    }
}

const tagProto = {
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

// Responsibility: return/construct a todoItem object, which represents a single todo item
const todoItemFactory = (itemTitle, itemDescription=null, itemDueDate=null, itemTags=null) => {
    const title = itemTitle;
    const description = itemDescription;
    const dueDate = itemDueDate;
    const tags = itemTags;

    const oneMethod = () => console.log("Foo");
    const anotherMethod = () => console.log("Bar");

    const _checklist = [];
    const addTask = (task) => _checklist.push(task);
    const printChecklist = () => console.log(_checklist);

    const factoryMethods = {
        oneMethod,
        anotherMethod,
        addTask,
        printChecklist
    }

    // copies "tag" properties into "item" properties
    let proto = Object.assign(itemProto, tagProto);  // (targetObj, sourceObj)
    // creates a new object, using an existing object as its prototype of newly created object
    let obj = Object.create(proto);
    // "mix-in" methods defined in factory function
    obj = Object.assign(obj, factoryMethods);

    obj.title = title;
    obj.dueDate = dueDate;
    obj.tags = tags;
    // obj.checklist = checklist;

    return obj;
}

export default function loadTodoItems() {
    // const t1 = todoItemFactory('Brush Teeth', 'For oral hygiene', '01/01/2023', ['Hygiene']);
    const t1 = todoItemFactory('Brush Teeth');
    // const t2 = todoItemFactory('Take Shower', 'For overall hygiene', '02/01/2023', ['Entertainment']);
    t1.describe();
    t1.printTags();
    t1.appendTag('Leisure');
    t1.printTags();
    console.log(Object.getPrototypeOf(t1));
    t1.addTask('Buy new toothpaste');
    t1.printChecklist();
    t1.addTask('Buy new toothbrush');
    t1.printChecklist();
    t2.addTask('Replace showerhead');
    t2.printChecklist();
    t2.describe();

    console.log("------------------");

    // for (let key in t1) {
    //     if(t1.hasOwnProperty(key)) {
    //         console.log(key + " --> " + t1[key]);
    //     }
    // }

    t1.myFunc();
    t2.myFunc();
}
