
# Library Management System

This is a Libary Management System project. You can add new books, see all the books, edit book details, and delete books. You can also borrow books and see a summary of what has been borrowed.

## Features

*   **View All Books:** See a list of all available books.
*   **Add a New Book:** Add a new book to the library.
*   **Edit a Book:** Change the information of any book.
*   **Delete a Book:** Remove a book from the list.
*   **Borrow a Book:** Borrow one or more copies of a book.
*   **Borrow Summary:** See a list of all books that have been borrowed.

## Technology Used

*   **Frontend:** React, TypeScript, Redux Toolkit (RTK Query)
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB, Mongoose
*   **Styling:** Tailwind CSS

## How to Run This Project

Follow these steps to run the project on your own computer.

### 1. Get the Code

First, copy the project to your computer.
```bash
git clone https://github.com/akashdnet/a4-lms-frontend.git
cd a4-lms-frontend
```

### 2. Setup the Backend (Server)

You can see the live project here for backend: **[Live Project Link Repo Link](https://github.com/akashdnet/backend-library-management-system)**

### 3. Setup the Frontend (Client)

```bash
# Go to the a4-lms-frontend folder
cd a4-lms-frontend

# Install the necessary packages
npm install



# Start the frontend app
npm run dev
```
The app will open in your browser at `http://localhost:5173` (or another port).

## Live Demo

You can see the live project here: **[Live Project Link](https://a4-lms-frontend.vercel.app/)**

## API Endpoints

Here are the main API routes used in this project:

| Method | Endpoint              | Description                      |
| ------ | --------------------- | -------------------------------- |
| `GET`  | `/api/books`          | Get a list of all books.         |
| `POST` | `/api/books`          | Add a new book.                  |
| `GET`  | `/api/books/:id`      | Get details of one book.         |
| `PATCH`| `/api/books/:id`      | Update a book's information.     |
| `DELETE`| `/api/books/:id`      | Delete a book.                   |
| `POST` | `/api/borrow`         | Borrow a book.                   |
| `GET`  | `/api/borrow/summary` | Get the borrow summary.          |