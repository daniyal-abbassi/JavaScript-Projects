const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//to store the task
const taskData = JSON.parse(localStorage.getItem("data")) || [];
//current task
let currentTask = {};

const removeSpecialChar = (str)=> str.trim().replace(/[^A-Za-z0-9\-\s]/g,"");

const addOrUpdateTask = () => {
    if(!titleInput.value.trim()) {
        alert("Please Enter A task")
        return;
    }
    const dataArrIndex = taskData.findIndex((item)=>item.id===currentTask.id)
    const taskObj = {
        id: `${removeSpecialChar(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: removeSpecialChar(titleInput.value),
        date: dateInput.value,
        description: removeSpecialChar(descriptionInput.value),
    }
    if(dataArrIndex===-1) taskData.unshift(taskObj)
    else taskData[dataArrIndex] = taskObj;
    
    localStorage.setItem("data",JSON.stringify(taskData))

    updateTaskContainer();
    reset();
    
}

const updateTaskContainer = () => {
    tasksContainer.innerHTML = "";
    taskData.forEach(({id,title,description,date})=>{
        tasksContainer.innerHTML +=`
            <div class="task" id="${id}">
            <p><strong>Title:</strong>${title}</p>
            <p><strong>Date:</strong>${date}</p>
            <p><strong>Description:</strong>${description}</p>
            <button onclick="editTask(this)" type="button" class="btn">Edit</button>
            <button onclick="deleteTask(this)" type="button" class="btn">Delete</button>
            </div>
        `
    })
}
const deleteTask = (buttonEl)=>{
    const taskIndex = taskData.findIndex((item)=>item.id === buttonEl.parentElement.id)
    buttonEl.parentElement.remove();
    taskData.splice(taskIndex,1);

    localStorage.setItem("data",JSON.stringify(taskData))
}

const editTask = (buttonEl) => {
    const taskIndex = taskData.findIndex((item)=>item.id === buttonEl.parentElement.id);

    currentTask = taskData[taskIndex];

    titleInput.value = currentTask.title;
    dateInput.value = currentTask.date;
    descriptionInput.value = currentTask.description;

    addOrUpdateTaskBtn.innerText = "Update Task";
    taskForm.classList.toggle("hidden");
}

const reset = () => {
    addOrUpdateTaskBtn.innerText = "Add Task"
    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
    taskForm.classList.toggle("hidden");
    currentTask = {};
}

if(taskData.length) updateTaskContainer()
//open the task form
openTaskFormBtn.addEventListener("click",()=>{
    taskForm.classList.toggle("hidden")
})

//show modal
closeTaskFormBtn.addEventListener("click",()=>{
    const isInput = titleInput.value || dateInput.value || descriptionInput.value;
    const isUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;
    if(isInput && isUpdated){
        confirmCloseDialog.showModal();
    } else {
        reset()
    }
})
//close modal
cancelBtn.addEventListener("click",()=>confirmCloseDialog.close())
//close modal(discard)
discardBtn.addEventListener("click",()=>{
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden")
})

taskForm.addEventListener("submit",(e) => {
    e.preventDefault();
    
    addOrUpdateTask();
})

