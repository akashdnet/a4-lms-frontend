import {
  createBrowserRouter
} from "react-router";

import App from '@/App'
import Books from '@/app/books'
import CreateBook from '@/app/create-book'
import EditBook from '@/app/edit-book'
import SingleBook from '@/app/single-book'
import BorrowSummary from '@/app/borrow'
import BorrowBook from '@/app/borrow-book'

export let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {path: "books", Component: Books },
      {path: "create-book", Component: CreateBook  },
      {path: "books/:id", Component:SingleBook },
      {path: "edit-book/:id", Component: EditBook },
      {path: "borrow/:bookId", Component: BorrowBook },
      {path: "borrow-summary", Component: BorrowSummary},
    ]
  },
]);

