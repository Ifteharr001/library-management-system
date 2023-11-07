import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";
import History from "../Components/CategoryBook/History/History";
import Drama from "../Components/CategoryBook/Drama/Drama";
import Thriller from "../Components/CategoryBook/Thriller/Thriller";
import Noval from "../Components/CategoryBook/Noval/Noval";

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
           path: "add-book",
           element: <AddBook></AddBook>,
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
       ],
     },
   ]);


export default router;