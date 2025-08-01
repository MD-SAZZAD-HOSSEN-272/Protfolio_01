import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import AddTask from "../Componentes/AddTask";
import Messages from "../Componentes/Message";
export const Router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/dashboard',
                Component: Dashboard,
                children: [
                    {
                        index: true,
                        Component: AddTask
                    },
                    {
                        path: '/dashboard/messages',
                        Component: Messages
                    }
                ]
            }
        ]
    }
])