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
    const li = document.createElement("li");
    li.innerText = task;

    taskList.appendChild(li);




    // end 
    taskInput.value = "";
}