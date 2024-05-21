document.querySelector(".addTask-btn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Enter at least 1 character");
    return;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.className = "task-content";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.className = "done-btn";
  doneBtn.onclick = function () {
    taskSpan.classList.toggle("marked-task");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    newTask.remove();
  };

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons";
  buttonsDiv.appendChild(doneBtn);
  buttonsDiv.appendChild(deleteBtn);

  newTask.appendChild(taskSpan);
  newTask.appendChild(buttonsDiv);
  taskList.appendChild(newTask);

  taskInput.value = "";
  taskInput.focus();
}