import todoItemFactory from './todo.js';

class Project {
    notes;
    todoItems = {};

    constructor(name) {
        this.name = name;
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
            .map(item => item.tags )
            .flat();

        const uniqueArray = Array.from(new Set(tags));
        return uniqueArray;
    }
}

export default function buildProject() {
    const p = new Project('Daily Tasks');
    p.notes = 'My food journal';

    p.addItem('Mail parcel to Mum');
    p.addItem('Pay the bills');
    p.addItem('Run for 10 minutes');
    p.addItem('Study on the exercise bike');

    let itemValues = Object.values(p.todoItems);
    // console.log(itemValues);
    
    itemValues[0]._appendTag('Errands');
    itemValues[0].notes = 'Needs to be done at the post office.'
    itemValues[0].addTask('Find item.');
    itemValues[0].addTask('Pack parcel.');
    itemValues[0].addTask('Mail parcel.');


    // itemValues[0].setCompleted();
    itemValues[1]._appendTag('Errands');
    itemValues[2]._appendTag('Fitness');
    // itemValues[3].appendTag('Fitness', 'Study', 123);
    itemValues[3]._appendTag('Fitness', 'Study');

    // console.log(p.getUniqueTags());       
    // console.log(p.todoItems);

    return p;
}
