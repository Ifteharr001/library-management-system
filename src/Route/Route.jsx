import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "../Pages/Home/Home";
import AddBook from "../Pages/AddBook/AddBook";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <LayOut></LayOut>,
       children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "add-book",
            element: <AddBook></AddBook>
        }
       ]
     },
   ]);


export default router;