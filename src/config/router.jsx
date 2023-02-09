import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Root from "../pages/root"
import Student from "../pages/Student"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
])

export default router
