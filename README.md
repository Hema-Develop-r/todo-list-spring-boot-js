To-Do List Application
This is an interactive To-Do List application built with Spring Boot, HTML, CSS, and JavaScript. The application allows users to manage their daily tasks efficiently with a clean and modern user interface. It includes features such as adding new tasks, marking tasks as completed, deleting tasks, and displaying motivational quotes upon task completion. The application also displays the current date and time and uses a stylish glassmorphism effect for an enhanced user experience.

Features
Add New Tasks: Users can add new tasks to their to-do list.
Complete Tasks: Users can mark tasks as completed. Completed tasks are visually distinguished.
Delete Tasks: Users can delete individual tasks or clear all tasks.
Motivational Quotes: Displays a motivational quote whenever a task is marked as completed.
Current Date and Time: Displays the current date and time, which updates every second.
Glassmorphism Design: Utilizes a modern glassmorphism design for a visually appealing user interface.
Glitter Text Effect: The application title features a glitter text effect for added visual flair.
Technologies Used
Spring Boot: For building the backend API.
HTML: For the structure of the web application.
CSS: For styling, including glassmorphism and glitter text effects.
JavaScript: For interactivity and dynamic updates, such as displaying the current date and time, and managing task actions.
Setup Instructions
Prerequisites
Java 8 or higher
Maven
Git
Steps to Run
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/todo-list-spring-boot.git
cd todo-list-spring-boot
Build and run the Spring Boot application:

sh
Copy code
mvn spring-boot:run
Open your browser and navigate to http://localhost:8080 to access the application.

Usage
Add a Task: Enter a task in the input field and click the "Add" button.
Complete a Task: Click the checkbox next to a task to mark it as completed.
Delete a Task: Click the delete icon next to a task to remove it from the list.
Clear All Tasks: Click the "Delete All" button to remove all tasks.
Project Structure
arduino
Copy code
src
└── main
    ├── java
    │   └── com
    │       └── example
    │           └── demo
    │               ├── controller
    │               │   └── ToDoController.java
    │               ├── model
    │               │   └── ToDo.java
    │               ├── repository
    │               │   └── ToDoRepository.java
    │               ├── service
    │               │   └── ToDoService.java
    │               └── DemoApplication.java
    ├── resources
        ├── static
        │   ├── delete-logo.png
        │   ├── styles.css
        │   ├── script.js
        │   └── index.html
        ├── application.properties
        └── templates
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Screenshots


Replace https://github.com/your-username/todo-list-spring-boot.git with the actual URL of your GitHub repository. Add paths to your screenshots under the "Screenshots" section. Adjust the project structure and other details as necessary to match your implementation.







