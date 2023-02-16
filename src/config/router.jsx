import { createBrowserRouter } from "react-router-dom"
import NotFound from "../pages/404"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/login"
import Root from "../pages/root"
import Student from "../pages/Student"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/student",
        element: <Student />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
