// Get a reference to the DOM elements
const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');

// Store the list of tasks
let tasks = [];

// Function to render the list
function renderList() {
  // Clear the existing list
  todoList.innerHTML = '';

  // Render each task as a list item
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    
    // Add a delete button for each task
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  });
}

// Function to add a new task
function addTask() {
  const task = todoInput.value.trim();
  
  if (task !== '') {
    tasks.push(task);
    renderList();
    todoInput.value = '';
  }
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderList();
}

// Event listener for add button click
addButton.addEventListener('click', addTask);

// Initial rendering of the list
renderList();
