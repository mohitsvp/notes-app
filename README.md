# Responsive Animated Notes Dashboard

This project is a modern, responsive, and animated notes application built with React, TypeScript, and Framer Motion. It's a frontend-only application that persists all data to `localStorage` and features a fluid, Apple-style UI.

This application was built as a solution to a technical coding assignment.


---

### Live Demo

<video width="100%" controls>
  <source src="./src/assets/live-demo.mov" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Dashboard (Light & Dark)

![Desktop View Light Mode](/src/assets/img/dashboard-light.png)


![Desktop View Night Mode](/src/assets/img/dashboard-night.png)

### Mobile View


![Desktop View Light Mode Mobile](/src/assets/img/dashboard-light-mobile.png)

![Desktop View Dark Mode Mobile](/src/assets/img/dashboard-night-mobile.png)

---

## ✨ Core Features

* **Full CRUD:** Create, Read, Update, and Delete notes.
* **Fluid Grid Layout:** Fully responsive grid that animates smoothly when adding, deleting, or filtering notes.
* **Persistent State:** Notes are saved in `localStorage` and managed with Redux Toolkit, so your data is safe on refresh.
* **Animated Theme Toggle:** A beautiful, animated toggle for switching between Light and Dark modes. The theme is also persisted.
* **Animated Modals:** Modals for adding and editing notes gracefully animate in and out.
* **Microinteractions:** Subtle hover animations on note cards and icons provide satisfying user feedback.
* **Real-time Search:** Instantly filter notes by their title with the responsive search bar.
* **Toast Notifications (Bonus):** Animated, non-intrusive toast notifications confirm user actions like creating or deleting a note.

---

## 🛠️ Tech Stack

This project was built using the following technologies as required by the assignment:

* **Framework:** React (via Vite)
* **Language:** TypeScript
* **State Management:** Redux Toolkit
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Notifications:** `react-hot-toast`
* **Icons:** `react-icons`
* **Deployment:** Vercel

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v18 or later) and npm installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mohitsvp/notes-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd notes-app
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The app will be available at `http://localhost:5173` (or the next available port).