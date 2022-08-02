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
                alert('Checked!');    
                item.toggleCompletion();
                console.log(item);
            } else {
                alert('Not checked!');
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
            label.setAttribute('for', elementID); // link "id" and "for"
            label.textContent = item.title;
            return label;
        }

        const checkbox = createCheckbox();
        const itemLabel = createLabel();

        const targetDiv = document.querySelector(query);
        const itemDiv = document.createElement('div');
        itemDiv.dataset.itemId = item.uuid;
        
        itemDiv.append(checkbox, itemLabel);
        targetDiv.appendChild(itemDiv);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    return {
        insertProjectHeading,
        insertProjectItem
    };
    
})();
