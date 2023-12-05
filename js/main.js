
// HTML
const taskForm = document.getElementById('frm-task');
// consts and vars
const lstTask = [];

// On load website
window.onload = onLoad;

function onLoad() {
    initView();
}

function initView() {
    taskForm.addEventListener('submit', onSubmitTaskForm);
}

function onSubmitTaskForm(e) {
    const formData = new FormData(taskForm);

    e.preventDefault();
    addTask(formData.get('task'));
}

function addTask(task) {
    lstTask.push(task);
    console.log(lstTask); //TODO: Delete line
}