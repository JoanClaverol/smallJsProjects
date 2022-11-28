const getTask = () => {
    let task = document.getElementById('inputTask').value;
    if (task === '') {
        return;
    }
    // append task to list
    let taskItem = document.createElement('div');
    taskItem.innerHTML = '<div id="task" class="m-2" style="display: flex; justify-content: space-between; align-items: center;"><div id="taskText">' + task + '</div><div class="btn-group" id="btnGroup"><button class="btn btn-danger" type="button" id="deleteButton" onclick="deleteTask(this)">Delete</button><button class="btn btn-light" type="button" id="editButton" onclick="editTask(this)">Edit</button></div></div>';
    document.getElementById('taskList').appendChild(taskItem);
    // clear input
    document.getElementById('inputTask').value = '';
};

const deleteTask = (element) => {
    let task = element.parentNode.parentNode;
    // remove task from list
    task.parentNode.removeChild(task);
};

// need to locate the element of task text, 
const editTask = (element) => {
    // edit task
    let task = element.parentNode.parentNode.getElementById('taskText')[0];
    task.style.display = 'none';
    let originTask = task.innerHTML;
    // add a new div after the first div as a first child
    let editDiv = document.createElement('div');
    editDiv.innerHTML = '<button class="btn btn-success" type="button" id="saveButton" onclick="saveTask(this)">Save</button><button class="btn btn-light" type="button" onclick="cancelTask(this, \'' + originTask + '\')">Cancel</button>';
    element.parentNode.parentNode.insertBefore(editDiv, element.parentNode.parentNode.firstChild);
    element.parentNode.innerHTML = '<button class="btn btn-success" type="button" id="saveButton" onclick="saveTask(this)">Save</button><button class="btn btn-light" type="button" onclick="cancelTask(this)">Cancel</button>';
};

const saveTask = (element) => {
    let task = element.parentNode.parentNode.getElementById('taskText')[0];
    let originTask = task.getElementsByTagName('input')[0].value;
    if (originTask === '') {
        deleteTask(element);
    }
    task.innerHTML = originTask;
    element.parentNode.innerHTML = '<button class="btn btn-danger" type="button" id="deleteButton" onclick="deleteTask(this)">Delete</button><button class="btn btn-light" type="button" onclick="editTask(this)">Edit</button>';
};

const cancelTask = (element, originTask) => {
    let task = element.parentNode.parentNode.getElementById('taskText')[0];
    task.innerHTML = originTask;
    element.parentNode.innerHTML = '<button class="btn btn-danger" type="button" id="deleteButton" onclick="deleteTask(this)">Delete</button><button class="btn btn-light" type="button" onclick="editTask(this)">Edit</button>';
}