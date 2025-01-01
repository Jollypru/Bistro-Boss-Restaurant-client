
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/logIn/Login';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/order/:category',
                element:<Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            }

        ]
    }
])

export default Router;