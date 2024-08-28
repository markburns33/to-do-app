import { saveToLocalStorage } from "./localStorageUtils";

function completeTask(newTask, task, tasks) {
    newTask.classList.add('completed')
    const index = tasks.indexOf(task)
    tasks.splice(index, 1);
    saveToLocalStorage('tasks',tasks);
}

export { completeTask };