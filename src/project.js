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

    set notes(text) {
        this._notes = text;
    }
}

export default function loadProject() {
    const p = new Project('Daily Tasks');
    console.log(p.name);

    p.notes = 'My food journal.';
    p.addItem('Drink water');
    p.addItem('Eat pizza');

    p.todoItems.forEach(item => {
        item.printSummary();
    });

    console.log(p.notes);
}
