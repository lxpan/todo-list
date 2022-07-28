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
}

export default function loadProject() {
    const p = new Project('Daily Tasks');
    console.log(p.name);

    p.addItem('Drink water');
    console.log(p.todoItems);
    p.addItem('Eat pizza');
    console.log(p.todoItems);
}
