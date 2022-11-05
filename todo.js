function getTask() {
    let task = document.getElementById('inputTask').value;
    if (task === '') {
        return;
    }
    // append task to list
    let taskItem = document.createElement('div');
    taskItem.innerHTML = '<div id="task" class="m-2" style="display: flex; justify-content: space-between; align-items: center;"><div>' + task + '</div><div class="btn-group" id="btnGroup"><button class="btn btn-danger" type="button" id="deleteButton" onclick="deleteTask(this)">Delete</button><button class="btn btn-light" type="button" onclick="editTask()">Edit</button></div></div>';
    document.getElementById('taskList').appendChild(taskItem);
    // clear input
    document.getElementById('inputTask').value = '';
};

function deleteTask(element) {
    let task = element.parentNode.parentNode;
    // remove task from list
    task.parentNode.removeChild(task);
};