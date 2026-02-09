# To Do App

This **To Do App** is a simple and clean task management application built using **HTML, CSS, and JavaScript**. It allows users to add, view, and delete tasks while automatically saving data in the browser’s **localStorage**, ensuring tasks remain available even after refreshing the page.

The project is designed with a focus on usability, clarity, and beginner-friendly JavaScript logic. It demonstrates how core frontend technologies can be combined to create a functional, persistent web application without using any external libraries or frameworks.

---

## Description

The application provides an input field where users can enter tasks and add them to a task list using a button. Each task is displayed immediately in the interface along with a delete button. Duplicate tasks are prevented, and empty inputs are handled with user alerts for better experience.

All tasks are stored locally in the browser using `localStorage`. When the page loads, previously saved tasks are automatically retrieved and rendered on the screen. Users can remove tasks individually, and the changes are instantly reflected in both the UI and local storage.

The layout is styled using modern CSS techniques, including Flexbox, custom scrollbars, and gradients, resulting in a clean and visually appealing interface.

---

## Features

- Add new tasks  
- Prevent duplicate task entries  
- Delete tasks individually  
- Persistent data storage using localStorage  
- Dynamic task rendering  
- Clean and responsive UI design  

---

## Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Styling, layout, and visual design  
- **JavaScript (ES6)** – DOM manipulation, event handling, and localStorage  

---

## How It Works

1. Enter a task in the input field.
2. Click the **Add** button to save the task.
3. Tasks appear instantly in the list.
4. Click **Delete** to remove a task.
5. Tasks persist even after page refresh.

---

## Project Structure

```
to-do-app/
├── index.html
├── style.css
├── script.js
├── todo_favicon.png
└── README.md
```

---

## Learning Outcomes

This project helps in understanding:
- JavaScript event handling
- Working with localStorage
- DOM creation and manipulation
- Form handling and input validation
- UI styling with CSS

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/aqib897/to-do-app.git
   ```
2. Open `index.html` in your browser.
3. Start adding and managing tasks.

---

## License

This project is open-source and intended for learning and personal use.
