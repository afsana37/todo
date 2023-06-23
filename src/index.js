// index.js
import './styles.css';
// index.js
// Store the projects and tasks
const projects = [];

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
  const project = {
    name: projectName,
    tasks: []
  };
  projects.push(project);
  renderProjects();
}

// Render projects
function renderProjects() {
  projectTasks.innerHTML = '';
  projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteProject(index);
    });

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(deleteButton);
    projectTasks.appendChild(projectCard);
  });
}

// Delete a project
function deleteProject(index) {
  projects.splice(index, 1);
  renderProjects();
}

// Create a new task
function createTask(taskName, dueDate, priority) {
  const task = {
    name: taskName,
    dueDate: dueDate,
    priority: priority
  };

  const activeProject = projects[projects.length - 1];
  activeProject.tasks.push(task);
  renderTasks(activeProject);
}

// Render tasks for the active project
function renderTasks(activeProject) {
  const projectIndex = projects.indexOf(activeProject);
  const projectCard = projectTasks.children[projectIndex];
  const taskList = document.createElement('ul');
  taskList.classList.add('task-list');

  activeProject.tasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${task.name}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      <p>Due Date: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
    `;
    taskList.appendChild(taskItem);
  });

  // Clear existing tasks
  const existingTaskList = projectCard.querySelector('.task-list');
  if (existingTaskList) {
    projectCard.removeChild(existingTaskList);
  }

  projectCard.appendChild(taskList);
}

// Initialize the app
function init() {
  renderProjects();
}

init();
