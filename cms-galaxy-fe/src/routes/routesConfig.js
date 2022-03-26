import { Navigate } from "react-router-dom";

// pages
import Dashboard from "pages/Dashboard";
import Product from "pages/Product";
import Login from "pages/Login";
import Register from "pages/Register";
import Kanban from "pages/Kanban";
import User from "pages/User";

// layout
import MainLayout from 'layouts/MainLayout';

// configs
import { PATH_NAME } from "configs";

export const navbarConfig = [
  {
    title: 'Product',
    href: PATH_NAME.PRODUCT
  },
  {
    title: 'Kanban',
    href: PATH_NAME.KANBAN
  },
  {
    title: 'User',
    href: PATH_NAME.USER
  }
]

export const routesConfig = [
  {
    path: PATH_NAME.ROOT,
    element: () => <Navigate to={PATH_NAME.DASHBOARD} />
  },
  {
    path: PATH_NAME.DASHBOARD,
    element: Dashboard,
    layout: MainLayout
  },
  {
    path: PATH_NAME.PRODUCT,
    element: Product,
    layout: MainLayout
  },
  {
    path: PATH_NAME.KANBAN,
    element: Kanban,
    layout: MainLayout
  },
  {
    path: PATH_NAME.USER,
    element: User,
    layout: MainLayout
  },
  {
    path: PATH_NAME.LOGIN,
    element: Login
  },
  {
    path: PATH_NAME.REGISTER,
    element: Register
  }
]