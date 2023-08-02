const input = document.getElementById("input");
const taskList = document.getElementById("taskList");

input.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        addTask();
    }
})


function addTask() {
    if (input.value !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
        <p>${input.value}</p>
        <div class="taskItem-btn">
        <button class="edit">Edit</button>
        <button class="change">Change Status</button>
        <button class="delete">Delete</button>
        </div>
        `
        taskList.appendChild(taskItem);
        input.value = "";
    }
}


taskList.addEventListener('click', (e) => {
    const cls = e.target;
    if(cls.className === "delete"){
        cls.parentElement.parentElement.remove();
    }
    if(cls.className === "change"){
        cls.parentElement.parentElement.firstElementChild.classList.toggle('completed');
    }
    if(cls.className === "edit"){
        const editElement = cls.parentElement.parentElement.firstElementChild;
        const editInput = document.createElement('input');
        // editElement.replaceWith(editInput);
        editInput.addEventListener('keypress', (e)=>{
            const newTask = e.target.value;
            if(e.key === 'Enter'){
                editElement.innerHTML = newTask;
            }
        })
        editInput.value = editElement.textContent;
        editElement.innerHTML = '';
        editElement.appendChild(editInput);

        console.log(editElement);
    }
})