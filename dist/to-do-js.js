import  dateZone  from "./clock.js";

var tasks = document.getElementById("task");
var display = document.getElementById("output");
var taskItem = document.getElementById("taskItem");
var addButton = document.getElementById("addTask");
var allTasks = [];

var uniqueID;

function generateID() {
    uniqueID = new Date().getTime();
    return uniqueID;
}
function checkForOutput() {
    if (display.children.length === 0 && !display.textContent.trim()) {
        display.style.display = "none";
    }
    else {
        display.style.display = "block";
    }
}

function printTask(id, task, isChecked) {
    let data = `<div class="taskList mt-10 flex justify-between">
          <div class="flex items-start">
            <input type="checkbox" class="me-2 mt-2 cursor-pointer" id="${id}" onchange= checkTask(${id}) ${isChecked ? 'checked' : ''} />
            <label for="${id}" class="text-xl"><span id="taskItem" title="${dt()}">${task}</span></label>
          </div>
          <span class="flex items-center"><button class="ms-2 border-2 p-2 rounded-lg hover:bg-white hover:text-black" onclick="deleteTask(${id})"><i class="fas fa-trash-alt"></i></button></span>
        </div>`;

    // console.log(id);
    display.innerHTML += data;
    updateStyle(id, isChecked);
    checkForOutput();
}

document.addEventListener("DOMContentLoaded", function () {
    retrieveTasks();
    checkForOutput();
});

function saveTasks() {
    localStorage.setItem("allTasks", JSON.stringify(allTasks));
};

function retrieveTasks() {
    var storedtasks = localStorage.getItem("allTasks");
    if (storedtasks) {
        allTasks = JSON.parse(storedtasks);
    }
    // console.log(allTasks);
    allTasks.forEach((task) => {
        printTask(task.id, task.value, task.isChecked);
    });

};


addButton.addEventListener('click', function(){
    if (tasks.value.trim() === '') {
        alert("Enter Some Task");
        return false;
    };

    if (allTasks.some(task => task.value.toLowerCase() === tasks.value.toLowerCase().trim())) {
        alert("This task is already exist");
        console.log('You can not add another task');
    }
    else {
        var id = generateID();
        var checkValue = false;

        // console.log(tasks.value);
        printTask(id, tasks.value, checkValue);

        allTasks.push({ id: id, value: tasks.value, isChecked: checkValue });
        console.log(allTasks);
        saveTasks();
    }

    tasks.value = '';
    // tasks.setAttribute("autofocus", "autofocus");
    return false;
});

window.deleteTask = (id) => {
    console.info(`deleting task with id ${id}`);
    let selectTask = document.getElementById(`${id}`);

    if (selectTask) {
        selectTask.parentNode.parentNode.remove(selectTask);
    } else {
        alert(`That task not founded`);
    }

    allTasks = allTasks.filter(task => task.id !== id);
    saveTasks();

    checkForOutput();
    return false;
};

function updateStyle(id, isChecked) {
    const label = document.querySelector(`label[for="${id}"]`);
    label.style.textDecoration = isChecked ? 'line-through' : 'none';
}

window.checkTask = (id) => {
    let checkSelect = document.getElementById(`${id}`);
    console.log(`Your selected checkbox is ${id}`);

    let task = allTasks.find(task => (task.id === id));
    if (task) {
        task.isChecked = checkSelect.checked;
        updateStyle(task.id, task.isChecked);
        saveTasks();
    }

};

window.clearCache = () => {
    console.log('test');
    localStorage.clear("allTasks");
    allTasks = [];
    display.innerHTML = '';
    checkForOutput();

    // if(localStorage.length == 0) {
    // }
    // location.reload();
    // console.log(allTasks);
    // console.log(localStorage);
    return false;
}

window.dt = () => {
    let dateTime = new Date();

    let date = `${dateTime.getDate()}-${(dateTime.getMonth() + 1)}-${dateTime.getFullYear()}`;
    let time = `${dateTime.getHours()} : ${dateTime.getMinutes()}`
    // console.log(`${date} / ${time}`);

   return (` ${date}`);

};

tasks.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addButton.click();
        tasks.focus();
    }
    // console.log("Enter Pressed");
});