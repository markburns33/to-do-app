import { displayTasks } from "./displayTasks";

function displayProjects(projects, tasks) {
    const content = document.getElementById('content');
    content.innerHTML=''
    let newProject;
    for (let project of projects) {
        console.log(project);
        newProject = document.createElement('div');
        newProject.classList.add('project')

        var newTitle = document.createElement('p');
        newTitle.textContent = project.title;

        var newDesc = document.createElement('p');
        newDesc.textContent = project.desc;

        var showTasks = document.createElement('button')
        showTasks.type = 'submit';
        showTasks.textContent = 'show tasks';

        newProject.appendChild(newTitle);
        newProject.appendChild(newDesc);
        newProject.appendChild(showTasks);

        showTasks.addEventListener('click', function() {
            displayTasks(project.title, tasks);
        });
        
        content.appendChild(newProject);
    }
    return content;
}
export { displayProjects };