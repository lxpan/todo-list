export default (function view() {
    let elementID = 0;

    function createElement(elementName, className=null) {
        const element = document.createElement(elementName);
        
        if(className) {    
            element.className = className;
            return element;
        }
        else {
            return document.createElement(elementName);
        }
    }

    function insertProjectHeading(query, projectName) {
        const targetDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        targetDiv.appendChild(projectHeading);
    }

    function insertProjectItem(query, item) {
        // callback function for the 'todo' checkbox
        const toggleItemCompletionOnClick = (e) => {
            if(e.target.checked) {
                // alert('Checked!');    
                item.toggleCompletion();
                console.log(item);
            } else {
                // alert('Not checked!');
                item.toggleCompletion();
                console.log(item);
            }
        }

        const createCheckbox = () => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = elementID; // link "id" and "for"
            input.addEventListener('click', toggleItemCompletionOnClick);            
            return input
        }

        const getExclusiveSiblingNodes = (node) => {
            let siblings = [];

            const currentDataID = node.parentNode.dataset.itemId;
            const otherTodoItems = document.querySelectorAll(`.todoItem[data-item-id]:not([data-item-id="${currentDataID}"])`);
            
            Array.from(otherTodoItems).forEach(item => {
                const itemInfo = item.querySelector('.itemInfo');
                siblings.push(itemInfo)
            });

            return siblings;
        }

        const makeTodoItemExpand = (e) => {
            const siblingInfoDiv = e.target.parentNode.querySelector('.itemInfo');

            if(siblingInfoDiv.classList.contains('hidden')) {
                siblingInfoDiv.classList.remove('hidden');
            }
            siblingInfoDiv.classList.toggle('contracted');
            siblingInfoDiv.classList.toggle('expanded');
        }

        const createLabel = () => {
            // Create label (featuring item title)
            const label = document.createElement('label');
            label.textContent = item.title;
            // label.setAttribute('for', elementID); // link "id" and "for"
            
            // add callback to expand item on click
            label.addEventListener('click', (e) => {
                // first hide other items
                const otherItemInfo = getExclusiveSiblingNodes(e.target);
                otherItemInfo.forEach(infoDiv => {
                    infoDiv.classList.remove('expanded');
                    infoDiv.classList.add('contracted');
                });
                
                // then make current item expand
                makeTodoItemExpand(e);

            })

            return label;
        }

        const createItemInfoExpandable = () => {
            const notesDiv = (() => {
                const notes = document.createElement('div');
                notes.textContent = `Notes: ${item.notes}`;
                return notes;
            })();

            const itemTaskListDiv = (() => {
                const checklistDiv = document.createElement('div');
                const checklistList = document.createElement('ul');
                
                item.checklist.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task;
                    checklistList.appendChild(listItem);
                })
                
                checklistDiv.appendChild(checklistList);
                return checklistDiv;
            })();

            const datesDiv = (() => {
                // includes both 'date' and 'dueDate';
                const dates = document.createElement('div');
                const date = document.createElement('div');
                const dueDate = document.createElement('div');
                
                date.textContent = `Date: ${item.date}`;
                dueDate.textContent = `Due: ${item.dueDate}`;
                dates.append(date, dueDate);
                
                return dates;
            })();

            const tagsDiv = (() => {
                const tags = document.createElement('div');
                tags.textContent = item.getTags();
                return tags;
            })();

            // content that will show (expand) when item title is clicked
            const expandable = document.createElement('div');
            expandable.classList.add('itemInfo', 'contracted', 'hidden');
            expandable.append(notesDiv, itemTaskListDiv, datesDiv, tagsDiv);
            
            return expandable;
        }

        const itemDiv = createElement('div', 'todoItem');
        itemDiv.dataset.itemId = item.uuid;

        const checkbox = createCheckbox();
        const itemLabel = createLabel();

        const targetDiv = document.querySelector(query);
        
        itemDiv.append(checkbox, itemLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemDiv);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    function insertProjectItemForm(query, item) {
        // callback function for the 'todo' checkbox
        const toggleItemCompletionOnClick = (e) => {
            if(e.target.checked) {
                // alert('Checked!');    
                item.toggleCompletion();
                console.log(item);
            } else {
                // alert('Not checked!');
                item.toggleCompletion();
                console.log(item);
            }
        }

        const createCheckbox = () => {
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.id = elementID; // link "id" and "for"
            input.addEventListener('click', toggleItemCompletionOnClick);            
            return input
        }

        const getExclusiveSiblingNodes = (node) => {
            let siblings = [];

            const currentDataID = node.parentNode.dataset.itemId;
            const otherTodoItems = document.querySelectorAll(`.todoItem[data-item-id]:not([data-item-id="${currentDataID}"])`);
            
            Array.from(otherTodoItems).forEach(item => {
                const itemInfo = item.querySelector('.itemInfo');
                siblings.push(itemInfo)
            });

            return siblings;
        }

        const makeTodoItemExpand = (e) => {
            const siblingInfoDiv = e.target.parentNode.querySelector('.itemInfo');

            if(siblingInfoDiv.classList.contains('hidden')) {
                siblingInfoDiv.classList.remove('hidden');
            }
            siblingInfoDiv.classList.toggle('contracted');
            siblingInfoDiv.classList.toggle('expanded');
        }

        const createLabel = () => {
            // Create label (featuring item title)
            const label = document.createElement('label');
            label.textContent = item.title;
            /* 
            NB: We don't link the 'id' and 'for' elements because users' clicking on the label shouldn't toggle the checkbox.
            // label.setAttribute('for', elementID);
            */
            
            // add callback to expand item on click
            label.addEventListener('click', (e) => {
                // first hide other items
                const otherItemInfo = getExclusiveSiblingNodes(e.target);
                otherItemInfo.forEach(infoDiv => {
                    infoDiv.classList.remove('expanded');
                    infoDiv.classList.add('contracted');
                });
                
                // then make current item expand
                makeTodoItemExpand(e);

            })

            return label;
        }

        const createItemInfoExpandable = () => {
            const notesDiv = (() => {
                const notes = document.createElement('div');
                notes.textContent = `Notes: ${item.notes}`;
                return notes;
            })();

            const itemTaskListDiv = (() => {
                const checklistDiv = document.createElement('div');
                const checklistList = document.createElement('ul');
                
                item.checklist.forEach(task => {
                    const listItem = document.createElement('li');
                    listItem.textContent = task;
                    checklistList.appendChild(listItem);
                })
                
                checklistDiv.appendChild(checklistList);
                return checklistDiv;
            })();

            const datesDiv = (() => {
                // includes both 'date' and 'dueDate';
                const dates = document.createElement('div');
                const date = document.createElement('div');
                const dueDate = document.createElement('div');
                
                date.textContent = `Date: ${item.date}`;
                dueDate.textContent = `Due: ${item.dueDate}`;
                dates.append(date, dueDate);
                
                return dates;
            })();

            const tagsDiv = (() => {
                const tags = document.createElement('div');
                tags.textContent = item.getTags();
                return tags;
            })();

            // content that will show (expand) when item title is clicked
            const expandable = document.createElement('div');
            expandable.classList.add('itemInfo', 'contracted', 'hidden');
            expandable.append(notesDiv, itemTaskListDiv, datesDiv, tagsDiv);
            
            return expandable;
        }

        const itemDiv = createElement('div', 'todoItem');
        itemDiv.dataset.itemId = item.uuid;

        const checkbox = createCheckbox();
        const itemLabel = createLabel();

        const targetDiv = document.querySelector(query);
        
        itemDiv.append(checkbox, itemLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemDiv);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    return {
        insertProjectHeading,
        insertProjectItem,
        createElement
    };

    function displayProjects() {

    }
    
})();
