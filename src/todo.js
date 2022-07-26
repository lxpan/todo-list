const todoItemFactory = (t, de, dd, tag) => {
    const title = t;
    const description = de;
    const dueDate = dd;
    const priority = null;
    const notes = null;
    const tags = tag;

    return {
        describe: () => console.log(`Item ${title} is due by ${dueDate}`),
        getTags: () => console.log(`Tags: ${tags}`)        
    }
}

export default function loadTodoItems() {
    const t1 = todoItemFactory('Brush Teeth', 'For oral hygiene', '01/01/2023', ['A', 'B', 'C']);
    t1.describe();
    t1.getTags();
}
