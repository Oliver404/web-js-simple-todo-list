
// HTML
const taskForm = document.getElementById('frm-task');
const lstTasks = document.getElementById('lst-tasks');
// consts and vars
const tasks = [];

// ####### On Init ####### 
window.onload = onLoad;

function onLoad() {
    initView();
}

function initView() {
    taskForm.addEventListener('submit', onSubmitTaskForm);
}

// ####### Task Form #######
function onSubmitTaskForm(e) {
    const formData = new FormData(taskForm);

    e.preventDefault();
    addTask(formData.get('task'));
}

function clearTaskForm() {
    taskForm.reset();
}

// ####### Tasks List #######
function listNewTask() {
    lstTasks.appendChild(document.createElement("li")).textContent = tasks[tasks.length - 1];
}

// ####### Logic #######
function addTask(task) {
    if (task) {
        tasks.push(task);
        taskForm.reset();
        listNewTask();
    }
}