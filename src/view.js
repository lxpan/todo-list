export default (function view() {
    let elementID = 0;

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

        const createLabel = () => {
            // Create label (featuring item title)
            const label = document.createElement('label');
            // label.setAttribute('for', elementID); // link "id" and "for"
            label.textContent = item.title;
            label.addEventListener('click', (e) => {
                
                // hide all
                const allItems = document.querySelectorAll('.itemInfo');
                console.log(allItems);
                Array.from(allItems).forEach(info => {
                    info.classList.remove('active');
                    info.classList.add('hidden');
                });
                
                // set active
                const siblingInfoDiv = e.target.parentNode.querySelector('.itemInfo');
                siblingInfoDiv.classList.remove('hidden');
                siblingInfoDiv.classList.add('active');
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
            expandable.classList.add('itemInfo', 'hidden');
            expandable.append(notesDiv, itemTaskListDiv, datesDiv, tagsDiv);
            
            return expandable;
        }

        const checkbox = createCheckbox();
        const itemLabel = createLabel();

        const targetDiv = document.querySelector(query);
        const itemDiv = document.createElement('div');
        itemDiv.dataset.itemId = item.uuid;
        
        itemDiv.append(checkbox, itemLabel, createItemInfoExpandable());
        targetDiv.appendChild(itemDiv);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    return {
        insertProjectHeading,
        insertProjectItem
    };
    
})();
