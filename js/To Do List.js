let inputTask = document.querySelector(".input");
let plusButton = document.querySelector(".input-container .plus");
let tasksInfo = document.querySelector(".tasks-info");
let tasksCount = document.querySelector(".tasks-count span");
let finishCount = document.querySelector(".finished-tasks span");

window.onload = function () {
  inputTask.focus();
};

plusButton.onclick = function () {
  if (inputTask.value === "") {
    alert("no");
  } else {
    let noTaskMessage = document.querySelector(".no-tasks-massege");
    if (document.body.contains(document.querySelector(".no-tasks-massege"))) {
      noTaskMessage.remove();
    }

    let task = document.createElement("span"),
      deleteSpan = document.createElement("span");
    task.appendChild(document.createTextNode(inputTask.value));
    deleteSpan.appendChild(document.createTextNode("Delete"));
    task.appendChild(deleteSpan);
    tasksInfo.appendChild(task);
    deleteSpan.classList.add("delete");
    task.classList.add("task");
    inputTask.value = "";
    calcTasks();
    inputTask.focus();
  }
};
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    if (tasksInfo.childElementCount == "0") {
      noTasksMessage();
    }
  }
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("finished");
  }
  calcTasks();
});

function noTasksMessage() {
  let noTasksSpan = document.createElement("span");
  noTasksSpan.appendChild(document.createTextNode("No Tasks To Show"));
  tasksInfo.appendChild(noTasksSpan);
  noTasksSpan.classList.add("no-tasks-massege");
}
function calcTasks() {
  tasksCount.innerHTML = document.querySelectorAll(".tasks-info .task").length;
  finishCount.innerHTML = document.querySelectorAll(
    ".tasks-info .finished"
  ).length;
}
