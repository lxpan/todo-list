export default (function view() {
    let elementID = 0;

    function insertProjectHeading(query, projectName) {
        const targetDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        targetDiv.appendChild(projectHeading);
    }

    function insertProjectItem(query, textToUpdate, uuid) {
        const toggleCheckboxFunc = (e) => {
            if(e.target.checked) {
                alert('Checked!');
            } else {
                alert('Not checked!');
            }
        }

        const targetDiv = document.querySelector(query);
        const itemDiv = document.createElement('div');
        itemDiv.dataset.itemId = uuid;

        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'checkbox';
        input.id = elementID; // link "id" and "for"
        label.textContent = textToUpdate;
        label.setAttribute('for', elementID); // link "id" and "for"

        input.addEventListener('click', toggleCheckboxFunc);

        itemDiv.append(input, label);
        targetDiv.appendChild(itemDiv);

        // ensure each input-label pair has a unique integer identifier
        elementID++;
    }

    return {
        insertProjectHeading,
        insertProjectItem
    };
    
})();
