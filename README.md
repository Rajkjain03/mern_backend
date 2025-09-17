# MERN To-Do App - Backend

This is the backend server for a simple To-Do List application, built with Node.js, Express, and MongoDB. It provides a RESTful API for managing to-do items.

## ✨ Features

* **Create**, **Read**, **Update**, and **Delete** (CRUD) operations for to-do items.
* Connects to a MongoDB database for persistent data storage.
* Built with a clean, modular structure (routes, models, config).

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/en/) (which includes npm)
* [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine.

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    ```

2.  **Navigate to the project directory**
    ```bash
    cd backend
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Create an environment file**
    Create a `.env` file in the root of the `backend` directory and add the following variables.

    ```env
    PORT=5001
    MONGO_URI=your_mongodb_connection_string_goes_here
    ```

5.  **Run the server**
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5001`.

## ⚙️ API Endpoints

The following endpoints are available:

| Method | Endpoint          | Description                 | Request Body (Example)                               |
| :----- | :---------------- | :-------------------------- | :--------------------------------------------------- |
| `POST` | `/api/todos`      | Create a new to-do item     | `{ "task": "Learn express" }`                        |
| `GET`  | `/api/todos`      | Get all to-do items         | (NONE)                                            |
| `PUT`  | `/api/todos/:id`  | Update an existing to-do    | `{ "task": "Learn MERN", "completed": true }`        |
| `DELETE`| `/api/todos/:id`  | Delete a to-do item         | (NONE)       |