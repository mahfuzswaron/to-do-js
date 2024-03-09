const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("submitted")

});