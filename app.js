document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask(event) {
        event.preventDefault(); // Prevent form submission
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText) {
                listItem.textContent = newTaskText;
            }
        });

        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    }

    // Event listener for the form submission
    taskForm.addEventListener('submit', addTask);

    // Event listener for pressing enter in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(event);
        }
    });

    // Initialize existing tasks with delete and edit buttons
    const existingTasks = taskList.querySelectorAll('li');
    existingTasks.forEach(function (task) {
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(task);
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function () {
            const newTaskText = prompt('Edit task:', task.textContent);
            if (newTaskText) {
                task.textContent = newTaskText;
            }
        });

        task.appendChild(deleteButton);
        task.appendChild(editButton);
    });
});
