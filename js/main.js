
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
    lstTasks.appendChild(createTaskItem(tasks[tasks.length - 1]));
}

function createTaskItem(text) {
    const li = document.createElement('li');
    const check = document.createElement('input');
    const label = document.createElement('label');
    check.type = 'checkbox';
    label.textContent = text;
    
    li.appendChild(check);
    li.appendChild(label);

    return li;
}

// ####### Logic #######
function addTask(task) {
    if (task) {
        tasks.push(task);
        taskForm.reset();
        listNewTask();
    }
}