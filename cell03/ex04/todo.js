function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    let taskText = prompt("What is new TO DO?:");
    if (taskText) {
        let tasks = getTasks();
        tasks.unshift(taskText);
        saveTasks(tasks);
        renderTasks();
    }
}

function removeTask(idx) {
    if (confirm("delete this TO DO?")) {
        let tasks = getTasks();
        tasks.splice(idx, 1);
        saveTasks(tasks);
        renderTasks();
    }
}

function renderTasks() {
    let ftList = document.getElementById("ft_list");
    ftList.innerHTML = "";
    let tasks = getTasks();
    tasks.forEach((task, idx) => {
        let taskDiv = document.createElement("div");
        taskDiv.className = "task";
        taskDiv.textContent = task;
        taskDiv.onclick = () => removeTask(idx);
        ftList.appendChild(taskDiv);
    });
}

document.addEventListener("DOMContentLoaded", renderTasks);