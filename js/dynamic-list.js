const taskForm = document.querySelector('#task-form'); // form
const taskList = document.querySelector('#task-list'); // ol


taskForm.addEventListener('submit', function(event){
    event.preventDefault();
    
    const taskText = document.querySelector('#task-input').value; // text field
    const priority = document.querySelector('#priority-input').value; // select

    // Creates new elements
    const newLi = document.createElement('li');
    // Sets the content
    newLi.textContent = taskText;

    // Creates a button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "remove";
    deleteBtn.style.margin = "5px";
    deleteBtn.style.padding = "4px";
    deleteBtn.style.fontSize = "12px";

    deleteBtn.addEventListener('click', function() {
        newLi.remove();
    });

    newLi.appendChild(deleteBtn);

    if(priority === "high"){
        newLi.style.color = "red";
        newLi.style.fontWeight = "bold";
    } else if (priority === "medium")
        newLi.style.color = "orange";
      else
        newLi.style.color = "green";

    // Append to the list
    taskList.appendChild(newLi);

    // Clean up
    taskForm.reset();
})