import {createBrowserRouter} from "react-router-dom";
import Homepage from "./Views/Homepage/Homepage";
import Login from "./Views/Homepage/Login";
import Register from "./Views/Homepage/Register";
import Contact from "./Views/Homepage/Contact";
import Dashboard from "./Views/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    }
])

export default router;