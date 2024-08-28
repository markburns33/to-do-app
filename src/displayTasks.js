import { completeTask } from './completeTask.js'

function displayTasks(projectTitle, tasks) {
    const content = document.getElementById('content');
    content.innerHTML=''
    const taskFlexContainer = document.createElement('div')
    taskFlexContainer.classList.add('task-container');
    var showProjectTitleH2 = document.createElement('h2');
    showProjectTitleH2.classList.add('project-title');
    showProjectTitleH2.textContent=projectTitle;
    content.appendChild(showProjectTitleH2);
    let newTask;
    let count = 0;

    for (let task of tasks) {
        if (task.project === projectTitle) {
            newTask = document.createElement('div');
            newTask.classList.add('task')
    
            var newTitle = document.createElement('p')
            newTitle.classList.add('task-title');
            newTitle.textContent = task.title;
    
            var newDate = document.createElement('p');
            newDate.classList.add('task-date');
            newDate.textContent = task.date;

            var newPriority = document.createElement('p');
            newPriority.textContent = task.priority;  

            let completeTaskButton = document.createElement('button')
            completeTaskButton.textContent = 'Complete Task';
            
            (function(currentTask, currentNewTask) {
                completeTaskButton.addEventListener('click', function() {
                    completeTask(currentNewTask, currentTask, tasks);
                });
            })(task, newTask);

            newTask.appendChild(newTitle);
            newTask.appendChild(newDate);
            newTask.appendChild(newPriority);
            newTask.appendChild(completeTaskButton);

            taskFlexContainer.appendChild(newTask);
            count += 1;
        }

    }
    if (count === 0) {
        var noTaskMessage = document.createElement('p');
        noTaskMessage.textContent = 'No tasks yet, add one!';
        content.appendChild(noTaskMessage);
    }

    content.appendChild(taskFlexContainer);

    return content;
}

export { displayTasks };