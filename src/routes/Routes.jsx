import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';

const Routes = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        }
    ])
    return (
        <RouterProvider router={route}/>
            
    );
};

export default Routes;