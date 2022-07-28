import todoItemFactory from './todo.js';

class Project {
    notes;
    items;

    constructor(name) {
        this.name = name;
    }
}

export default function loadProject() {
    const p = new Project('Daily Tasks');
    console.log(p.name);
}
