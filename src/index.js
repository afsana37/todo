// index.js
import './styles.css';
document.getElementById('taskForm').addEventListener('submit', createTask);

function createTask(event) {
  event.preventDefault();

  const listNameInput = document.getElementById('listNameInput');
  const taskTitleInput = document.getElementById('taskTitleInput');
  const dueDateTimeInput = document.getElementById('dueDateTimeInput');
  const prioritySelect = document.getElementById('prioritySelect');

  const listName = listNameInput.value;
  const taskTitle = taskTitleInput.value;
  const dueDateTime = dueDateTimeInput.value;
  const priority = prioritySelect.value;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <input type="checkbox">
    <span>${listName}: ${taskTitle}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  document.getElementById('taskList').appendChild(taskItem);

  listNameInput.value = '';
  taskTitleInput.value = '';
  dueDateTimeInput.value = '';
  prioritySelect.selectedIndex = 0;
}
