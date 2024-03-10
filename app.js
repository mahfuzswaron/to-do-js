const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function completeTask(li) {
    // li.style.backgroundColor = "#50C878";
    

}

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
    completeBtn.addEventListener("click", () => completeTask(li))

    // append complete btn to li
    li.appendChild(completeBtn);

    // append li to taskList(ul)
    taskList.appendChild(li);



    // end 
    taskInput.value = "";
}