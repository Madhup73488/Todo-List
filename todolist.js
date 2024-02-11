// Enabling Enter Key binding with add button
const input = document.getElementById('taskInput');
const button = document.getElementById('button');

input.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        button.click();
    }
})

// Fucntion to add task to the list
function AddTask() {
    const taskInput = document.getElementById('taskInput').value;
    const taskList = document.getElementById('taskList');

    if (taskInput !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput}<span class="delete" onclick="deleteTask(this)">Delete</span>`;
        taskList.appendChild(li);
        document.getElementById('taskInput').value = '';
    }
    else {
        alert('Please enter a task!');
    }
}

// Fucntion to delete task from the list
function deleteTask(task) {
    task.parentElement.remove();
}

