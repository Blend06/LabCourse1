import {createBrowserRouter} from "react-router-dom";
import Homepage from "./Views/Homepage/Homepage";
import Login from "./Views/Homepage/Login";
import Register from "./Views/Homepage/Register";
import Contact from "./Views/Homepage/Contact";
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
    }
])

export default router;