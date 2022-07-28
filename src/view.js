export default (function view() {

    function insertProjectHeading(query, projectName) {
        const contentDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        contentDiv.appendChild(projectHeading);
    }

    function insertProjectItems(query, textToUpdate) {
        const contentDiv = document.querySelector(query);
        const newItem = document.createElement('div');
        newItem.textContent = textToUpdate;
        contentDiv.appendChild(newItem);
    }

    return {
        insertProjectHeading,
        insertProjectItems
    };
    
})();
