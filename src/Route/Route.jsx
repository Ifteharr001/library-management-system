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



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "updateBook/:id",
        element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>
        loader: ({params}) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "add-book",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "all-book",
        element: <PrivateRoute><AllBook></AllBook></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "book/History",
        element: <History></History>,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "book/Drama",
        element: <Drama></Drama>,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "book/Thriller",
        element: <Thriller></Thriller>,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "book/Novel",
        element: <Noval></Noval>,
        loader: () => fetch("http://localhost:5000/books"),
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
      
    ],
  },
]);

export default router;
