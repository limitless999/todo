function moveTask() {
  // Get the value of the task input field
  var task = document.getElementById("taskInput").value;

  // Create a new list item element
  var li = document.createElement("li");
  li.textContent = task;

  // Add the list item to the second section
  var ul = document.getElementById("taskList");
  ul.appendChild(li);

  // Clear the task input field
  document.getElementById("taskInput").value = "";
}
