import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../components/Dashboard';
import Add from './../pages/Add';
import Recorded from './../pages/Recorded';
import Edit from '../pages/Edit';

const Routes = () => {
    const route = new createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        }, {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
                {
                    path: 'add-task',
                    element: <Add/>
                },
                {
                    path: 'recorded-task',
                    element: <Recorded/>
                },
                {
                    path: 'recorded-task/:id',
                    element: <Edit />,
                    loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/tasks/${params.id}`) 
                },
            ]
        }
    ])
    return (
        <RouterProvider router={route}/>
            
    );
};

export default Routes;