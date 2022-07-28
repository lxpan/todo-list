export default (function view() {

    function updateProjectName(query, projectName) {
        const contentDiv = document.querySelector(query);
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        contentDiv.appendChild(projectHeading);
    }

    function updateProjectTodoItems(query, textToUpdate) {
        const contentDiv = document.getElementById(query);
        const newItem = document.createElement('div');
        newItem.textContent = textToUpdate;
        contentDiv.appendChild(newItem);
    }

    return {
        updateProjectTodoItems,
        updateProjectName
    };
    
})();
