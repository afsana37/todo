// index.js
import './styles.css';
// Store the projects and tasks
// Project and task creation logic
const projectForm = document.getElementById('projectForm');
const projectTitleInput = document.getElementById('projectTitleInput');
const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitleInput');
const dueDateTimeInput = document.getElementById('dueDateTimeInput');
const prioritySelect = document.getElementById('prioritySelect');
const projectTasks = document.getElementById('projectTasks');

// Handle project creation
projectForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const projectName = projectTitleInput.value;
  createProject(projectName);
  projectTitleInput.value = '';
});

// Handle task creation
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskName = taskTitleInput.value;
  const dueDate = dueDateTimeInput.value;
  const priority = prioritySelect.value;
  createTask(taskName, dueDate, priority);
  taskTitleInput.value = '';
  dueDateTimeInput.value = '';
  prioritySelect.value = '';
});

// Create a new project
function createProject(projectName) {
  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `<h3>${projectName}</h3>`;
  projectTasks.appendChild(project);
}

// Create a new task
function createTask(taskName, dueDate, priority) {
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `
    <input type="checkbox">
    <span>${taskName}</span>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
    <p>Due Date: ${dueDate}</p>
    <p>Priority: ${priority}</p>
  `;
  projectTasks.appendChild(task);
}
