const newTaskForm = document.getElementById('new-task-form');
const newTaskInput = document.getElementById('new-task');
const currentTasksList = document.getElementById('current-tasks');
const completedTasksList = document.getElementById('completed-tasks');

newTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTask = document.createElement('li');
  newTask.innerText = newTaskInput.value;
  currentTasksList.appendChild(newTask);
  newTaskInput.value = '';
});

currentTasksList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    completedTasksList.appendChild(event.target);
  }
});
