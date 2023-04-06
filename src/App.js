import React from "react";
import "./App.css"
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"

const Layout = () => {
    return (
        <div className="app">
            <Nav />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;