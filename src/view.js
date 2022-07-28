export default (function view() {

    function insertProjectHeading(query, projectName) {
        const targetDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        targetDiv.appendChild(projectHeading);
    }

    function insertProjectItem(query, textToUpdate) {
        const targetDiv = document.querySelector(query);
        const newItem = document.createElement('div');
        newItem.textContent = textToUpdate;
        targetDiv.appendChild(newItem);
    }

    return {
        insertProjectHeading,
        insertProjectItem
    };
    
})();
