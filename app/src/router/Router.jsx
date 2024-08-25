/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Createjob from "../pages/Createjob";
import Myjob from "../pages/Myjob";
import Salarypage from "../pages/Salarypage";
import Updatejob from "../pages/Updatejob";
import Login from "../components/Login";
import Jobdetail from "../pages/Jobdetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/post-job',
                element:<Createjob/>
            },
            {
                path:'/my-job',
                element:<Myjob/>
            },
            {
                path:'/salary',
                element:<Salarypage/>
            },
            {
                path:'edit-job/:id',
                element:<Updatejob/>,
                loader:({params})=>fetch(`http://localhost:5000/all-jobs/${params.id}`)
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/job/:id',
                element:<Jobdetail/>
            }
        ]
    },
]);

export default router