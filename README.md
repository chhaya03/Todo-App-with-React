# React + Vite

This project is a simple Todo Application built with React. It allows users to manage their tasks effectively by adding and deleting items from a todo list. The app is designed to provide an intuitive interface for task management.

<h1>Features</h1>
<ul>
  <li>Add Tasks: Users can add new tasks with a name and due date.</li>

 <li>Delete Tasks: Users can remove tasks from the list.</li>

 <li>Error Handling: Displays error messages when necessary.</li>
</ul>

<h1>Project Structure</h1>
src/<br>
|-- App.jsx        # Main application logic<br>
|-- App.css        # Styling for the application<br>
|-- Components/<br>
|   |-- AppName.jsx    # Displays the app name<br>
|   |-- InputRow.jsx   # Input field for adding tasks<br>
|   |-- ItemMap.jsx    # Renders the list of tasks<br>
|-- ErrorMessage.jsx   # Handles and displays error messages<br>

<h1>Technologies Used</h1>
<ul>
 <li>React for building the user interface</li> 

<li>CSS for styling</li> 
</ul>


<h1>How It Works</h1>
<h2>Adding Tasks:</h2>

The InputRow component captures the task name and due date.<br>

The changeHandleInput function in App.jsx adds the new task to the list.<br>

<h2>Deleting Tasks:</h2>

Each task in the ItemMap component has a delete button.

Clicking the button triggers the handleDeleteItem function to remove the task.

<h2>Error Handling:</h2>

The ErrorMessage component displays error messages based on the task list's state.


