const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const task = taskInput.value.trim();

    if (task) {
        addTask(task);
    } else {
        alert("you must write somthing");
        return;
    }
});

function addTask(task) {
    // create li
    const li = document.createElement("li");
    li.innerText = task;

    // create complete / done btn
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";

    completeBtn.addEventListener("click", () => {
        li.classList.add("completed-task");
        li.removeChild(completeBtn);
    });

    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });

    // create edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    editBtn.addEventListener("click", () => {
        const editedText = prompt();

        if (editedText) {

            li.textContent = editedText;

            // access class list
            const classList = li.classList;
            
            // make array from the class list
            const classArray = [...classList];
            

            // check if the task already complete
            if (classArray.indexOf("completed-task") == -1) {
                li.appendChild(completeBtn);
            }

            li.appendChild(deleteBtn);
            li.appendChild(editBtn);
        }
    })

    // append btns to li
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    // append li to taskList(ul)
    taskList.appendChild(li);



    // end 
    taskInput.value = "";
}


