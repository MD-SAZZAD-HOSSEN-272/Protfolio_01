import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Header from "../Componentes/Header";
import About from "../Componentes/About";

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
                path: '/home',
                Component: Header
            },
            {
                path: '/about',
                Component: About
            }
        ]
    }
])