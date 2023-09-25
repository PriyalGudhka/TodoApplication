//This method is used to display the form after user clicks on the add a to-do task button

const fetchData = () => {

    //hideForm method is called to hide the form elements
    hideForm();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function (response) {

        //Validated if the status is 200 then that task is added once the page is loaded
        if (this.status === 200) {

            const data = this.responseText;
            const todoList = JSON.parse(data);

            //Calls adddDetails method for adding the data present in the JSON file on the page
            addDetails(todoList);
        }

    });

    xhr.open('GET', 'data/todo.json'); // Fetches the todo.json file present in the data folder
    xhr.send();
}

fetchData();

//This method is used to add the JSON data to the page by iterating over the list of items present in the JSON file

const addDetails = (todoList = []) => {

    const ul = document.getElementById('taskList');

    //Used forEach loop for iteraing over the elements
    todoList.forEach(list => addNewToDo(list.title, list.description, list.dueDate, list.time, list.status, ul));

    const toDoDetails = document.getElementById('listofToDoTask');
    toDoDetails.appendChild(ul);

}

// This method is used to add the new task by passing varipus parameters

const addNewToDo = (toDoTitle, toDoDescription, toDoDate, toDoTime, status, parentUl) => {

    //Used document.createElement for creating div and li elements which is used for adding different task

    const toDoParentDiv = document.createElement('div');
    toDoParentDiv.classList.add("to_do_parent_div");

    const toDoChildLi = document.createElement('li');
    toDoChildLi.classList.add("to_do_child_li");

    //Creates element for title, description, date and time
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const taskdescription = document.createElement('taskdescription');
    taskdescription.style.whiteSpace = "pre"; //Used for inserting a new line when displaying the task details
    const taskdate = document.createElement('taskdate');
    taskdate.style.whiteSpace = "pre";
    const tasktime = document.createElement('tasktime');
    tasktime.style.whiteSpace = "pre";

    var newline = "\r\n"; //Used for inserting the new line

    // Below lines is used for displaying the content once the user clicks on that particular task
    summary.textContent = `${toDoTitle}` + newline;
    taskdescription.textContent = `Description: ` + `${toDoDescription}` + newline;
    taskdate.textContent = `Due Date: ` + `${toDoDate}` + newline;
    tasktime.textContent = `Due Time: ` + `${toDoTime}`;

    //Used for appending the elements to it's corresponding parent
    parentUl.appendChild(toDoParentDiv);
    toDoParentDiv.appendChild(toDoChildLi);
    toDoChildLi.appendChild(details);
    details.appendChild(summary);
    details.appendChild(taskdescription);
    details.appendChild(taskdate);
    details.appendChild(tasktime);

    //Creates the delete button and will call deleteButton method to delete the selected task
    const deletebutton = document.createElement('button');
    deletebutton.innerHTML = '<i class="fa fa-trash"> Delete</i>';
    deletebutton.classList.add("delete-btn");
    summary.classList.add("summaryToDo");
    summary.appendChild(deletebutton);
    deleteButton(deletebutton, details, toDoChildLi);

    //Creates the complete button which is used for marking the task as completed
    const taskCompletedButton = document.createElement('button');
    taskCompletedButton.innerHTML = '<i class="fas fa-check"> Completed</i>';
    taskCompletedButton.classList.add("mark-complete");
    summary.classList.add("summaryToDo");
    summary.appendChild(taskCompletedButton);
    markTaskAsComplete(taskCompletedButton, summary);

    //Checks if the status is false it will mark that particular item as completed by striking it out
    if (status === 'false')
        summary.style.textDecorationLine = "line-through";

}

// This function is called if user wants to mark that task as completed 

function markTaskAsComplete(item, summary) {
    item.addEventListener("click", function () {

        if (summary.style.textDecorationLine === "line-through") {
            summary.style.textDecorationLine = "none";
        }
        else {
            summary.style.textDecorationLine = "line-through";
        }

    })
};

//Handles the validation once the user enters the data 

const validateFields = () => {

    document.getElementById('errorMessage').style.color = "red";
    var todoDueDate = new Date();

    //Checks if title is not blank

    if (document.getElementById('title').value === '') {
        document.getElementById('errorMessage').innerHTML = "Title cannot be blank";

        return;
    }

    //Checks if description is not blank

    else if (document.getElementById('description').value === '') {
        document.getElementById('errorMessage').innerHTML = "Description cannot be blank";

        return;
    }

    //Checks if date is not blank

    else if (document.getElementById('date').value === '') {
        document.getElementById('errorMessage').innerHTML = "Date cannot be blank";

        return;
    }

    //Checks if date is not less than the current date

    else if (new Date(document.getElementById('date').value).getTime() < todoDueDate.getTime()) {
        document.getElementById('errorMessage').innerHTML = "Date cannot be less than the current date";
        return;
    }

    //Checks if time is not blank

    else if (document.getElementById('time').value === '') {
        document.getElementById('errorMessage').innerHTML = "Time cannot be blank";

        return;
    }

    // Assigning values of field to different variables

    let toDoTitle = document.getElementById('title').value;
    let toDoDescription = document.getElementById('description').value;
    let toDoDate = document.getElementById('date').value;
    let tdDoTime = document.getElementById('time').value;
    let status = true;

    const ul = document.getElementById('taskList');

    //Calls the method for adding a new task once the field validation is completed
    addNewToDo(toDoTitle, toDoDescription, toDoDate, tdDoTime, status, ul);

    document.getElementById('listofToDoTask').appendChild(ul);

    const toDoDetails = document.getElementById('listofToDoTask');
    toDoDetails.appendChild(ul);

    hideForm(); //Used for hiding the details of the task

    clearFormValues(); //Used for clearing the form values
}

//This method is used for loading the form once the user clicks on add button

function loadForm() {

    document.getElementById('wrapContent').style.display = "block";

}

//This method is used for hiding the details

function hideForm() {

    document.getElementById('wrapContent').style.display = "none";

}

//This method will clear the values in all the fields once the task is added 

function clearFormValues() {

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('errorMessage').innerHTML = '';
}

document.getElementById('saveTask').addEventListener('click', validateFields);

const todoList = document.getElementsByTagName("toDoSummary");
for (i = 0; i < todoList.length; i++) {
    console.log(i);

}

// This method is used for remove  a task
function deleteButton(item, details, li) {
    item.addEventListener("click", function () {

        li.style.display = "none";

        li.removeChild(details); //Used removeChild method for removing that particular task


    })
};
