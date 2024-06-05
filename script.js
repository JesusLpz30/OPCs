document.getElementById('add-task').addEventListener('click', function() {
  const taskText = document.getElementById('new-task').value;
  if (taskText) {
    addTask(taskText);
    document.getElementById('new-task').value = '';
  }
});

function addTask(text) {
  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');

  taskItem.textContent = text;
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.classList.add('complete');
  completeButton.addEventListener('click', function() {
    completeTask(taskItem);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', function() {
    taskItem.remove();
  });

  taskItem.appendChild(completeButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

function completeTask(taskItem) {
  const completedTaskList = document.getElementById('completed-task-list');
  taskItem.classList.add('completed');
  taskItem.querySelector('.complete').remove();
  completedTaskList.appendChild(taskItem);
}