/*
sorting by date
css
*/


import './styles.css';
import { Project } from './project';
import { displayProjects } from './displayProjects.js';
import { displayTasks } from './displayTasks.js';
import { populateProjectDropdown } from './populateProjectDropdown.js';
import { Task } from './task.js';
import { storageAvailable } from './storageAvailable.js';
import { saveToLocalStorage, loadFromLocalStorage } from './localStorageUtils.js';


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const navButtons = document.querySelectorAll('.nav-button');

    const projectModal = document.getElementById('project-modal');
    const addProjectButton = document.querySelector('.add-project-button');
    const projectCloseButton = document.querySelector('.project-close-button');
    const projectForm = document.getElementById('project-form');

    const taskModal = document.getElementById('task-modal');
    const addTaskButton = document.querySelector('.add-task-button');
    const taskCloseButton = document.querySelector('.task-close-button');
    const taskForm = document.getElementById('task-form');


    if (storageAvailable("localStorage")) {
        var projects = loadFromLocalStorage('projects') || [];
        var tasks = loadFromLocalStorage('tasks') || [];
      } 
      if (projects.length === 0) {
        const general = new Project('General', 'A list of all general tasks');
        projects.push(general);
        saveToLocalStorage('projects', projects);
    }

    displayProjects(loadFromLocalStorage('projects'),loadFromLocalStorage('tasks'));

    addProjectButton.addEventListener('click', () => {
        projectModal.style.display = 'flex';
    });
    addTaskButton.addEventListener('click', () => {
        taskModal.style.display = 'flex';

        populateProjectDropdown(loadFromLocalStorage('projects'));
    });

    projectCloseButton.addEventListener('click', () => {
        projectModal.style.display = 'none';
    });
    taskCloseButton.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    projectForm.addEventListener('submit', function(event) {
        event.preventDefault();
        projectModal.style.display = 'none';

        var title = document.getElementById('project-title').value;
        var desc = document.getElementById('project-desc').value;

        let newProject = new Project(title, desc);
        projects.push(newProject);
        saveToLocalStorage('projects', projects);
        projectForm.reset();
        displayProjects(loadFromLocalStorage('projects'), loadFromLocalStorage('tasks'));
    })

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        taskModal.style.display = 'none';

        var title = document.getElementById('task-name').value;
        var date = document.getElementById('task-date').value;
        var project = document.getElementById('project-select').value;
        var priority = document.querySelector('input[name="task-priority"]:checked').value;

        let newTask = new Task(title, date, project, priority);
        tasks.push(newTask);
        saveToLocalStorage('tasks',tasks);
        taskForm.reset();
        displayProjects(loadFromLocalStorage('projects'), loadFromLocalStorage('tasks'));
    })

    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
    });

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            switch (button.textContent) {
                case 'Important':
                    content.innerHTML='';
                    break;
                case 'Due Today':
                    content.innerHTML='';
                    break;
                case 'Due This Week':
                    content.innerHTML='';
                    break;
                case 'All Tasks':
                    content.innerHTML='';
                    displayProjects(loadFromLocalStorage('projects'), loadFromLocalStorage('tasks'));
                    break;
                default:
                    break;
            }
        })
    })
});