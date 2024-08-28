function populateProjectDropdown(projects) {
    /*
    select the dropdown menu
    clear existing options
    for each project, make a new option element = 'option'
    option.value = project
    option.textcontent = project
    projectSelect.apendChild(option)
    */

    const projectSelect = document.getElementById('project-select');
    projectSelect.innerHTML='';

    for (let project of projects) {
        const option = document.createElement('option');
        option.value = project.title;
        option.textContent = project.title;
        console.log(option.value);
        projectSelect.appendChild(option);
    }
}

export { populateProjectDropdown }