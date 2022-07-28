import todoItemFactory from './todo.js';

class Project {
    notes;
    todoItems = [];

    constructor(name) {
        this.name = name;
    }

    addItem(title) {
        const item = todoItemFactory(title);
        this.todoItems.push(item);
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
        const tags = this.todoItems
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
    p.todoItems[0].appendTag('Errands');
    p.todoItems[1].appendTag('Errands');
    
    p.addItem('Run for 10 minutes');
    p.todoItems[2].appendTag('Fitness');

    p.addItem('Study on the exercise bike');
    p.todoItems[3].appendTag('Fitness', 'Study', 123);

    // p.todoItems.splice(2, 1);

    // console.log(p.getUniqueTags());       
    // console.log(p.todoItems);

    return p;
}
