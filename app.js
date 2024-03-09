const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

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
    console.log("recieved ", task);
    taskInput.value = "";
}