import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Shop from "../pages/Shop";
import Home from "../pages/home/Home";
import SingleBook from "../pages/SingleBook";
import DashboardLayout from "@/dashboard/DashboardLayout";
import Dashboard from "@/dashboard/Dashboard";
import UploadBook from "@/dashboard/UploadBook";
import ManageBooks from "@/dashboard/ManageBooks";
import EditBook from "@/dashboard/EditBook";
import Signup from "@/components/Signup";


  const router = createBrowserRouter([
    /* Main Pages Routes */
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/book/:id",
          element: <SingleBook />,
          loader: ({params}) => fetch(`http://localhost:3000/api/book/${params.id}`)

        },
      ]
    },
    /* Dashboard Routes */
    {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />,
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks />,
        },
        {
          path: "/admin/dashboard/edit-book/:id",
          element: <EditBook />,
          loader: ({params}) => fetch(`http://localhost:3000/api/book/${params.id}`)
        },
      ]
    },
    /* Authentication Routes */
    {
      path:"sign-up",
      element: <Signup />
    }
  ]);

  export default router;