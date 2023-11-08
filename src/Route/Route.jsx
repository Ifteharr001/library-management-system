import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import History from "../Components/CategoryBook/History/History";
import Drama from "../Components/CategoryBook/Drama/Drama";
import Thriller from "../Components/CategoryBook/Thriller/Thriller";
import Noval from "../Components/CategoryBook/Noval/Noval";
import AllBook from "../Pages/AllBook/AllBook";
import UpdateBooks from "../Components/UpdateBooks/UpdateBooks";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DetailBook from "../Components/CategoryBook/DetailBook/DetailBook";
import BorowedBooks from "../Pages/BorwedBooks/BorowedBooks";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBooks></UpdateBooks>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-server-steel.vercel.app/books/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: <DetailBook></DetailBook>,
        loader: ({ params }) =>
          fetch(
            `https://library-management-system-server-steel.vercel.app/books/${params.id}`
          ),
      },
      {
        path: "add-book",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "all-book",
        element: (
          <PrivateRoute>
            <AllBook></AllBook>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://library-management-system-server-steel.vercel.app/books"
          ),
      },
      {
        path: "book/History",
        element: <History></History>,
        loader: () =>
          fetch(
            "https://library-management-system-server-steel.vercel.app/books"
          ),
      },
      {
        path: "book/Drama",
        element: <Drama></Drama>,
        loader: () =>
          fetch(
            "https://library-management-system-server-steel.vercel.app/books"
          ),
      },
      {
        path: "book/Thriller",
        element: <Thriller></Thriller>,
        loader: () =>
          fetch(
            "https://library-management-system-server-steel.vercel.app/books"
          ),
      },
      {
        path: "book/Novel",
        element: <Noval></Noval>,
        loader: () =>
          fetch(
            "https://library-management-system-server-steel.vercel.app/books"
          ),
      },
      {
        path: "borrowed-books",
        element: (
          <PrivateRoute>
            <BorowedBooks></BorowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
