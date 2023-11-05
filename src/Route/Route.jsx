import { createBrowserRouter } from "react-router-dom";
import LayOut from "./LayOut";
import Home from "../Pages/Home/Home";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <LayOut></LayOut>,
       children: [
        {
            path: "/",
            element: <Home></Home>
        }
       ]
     },
   ]);


export default router;