export default (function view() {

    function updateProjectName(projectName) {
        const contentDiv = document.getElementById('content');
        const projectHeading = document.createElement('h2');
        projectHeading.textContent = projectName;
        contentDiv.appendChild(projectHeading);
    }

    function updateProjectTodoItems(textToUpdate) {
        const contentDiv = document.getElementById('content');
        const newItem = document.createElement('div');
        newItem.textContent = textToUpdate;
        contentDiv.appendChild(newItem);
    }

    return {
        updateProjectTodoItems,
        updateProjectName
    };
    
})();
