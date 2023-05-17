import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../components/Home/Home";
import RegisterVolunteer from "../components/RegisterVolunteer/RegisterVolunteer";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "../layout/AdminLayout";
import RegisteredList from "../components/RegisteredList/RegisteredList";
import AddEvent from "../components/AddEvent/AddEvent";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registerVolunteer",
        element: (
          <PrivateRoute>
            <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout></AdminLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <RegisteredList></RegisteredList>,
        loader: () =>
          fetch("https://volunteer-network-server-sage.vercel.app/volunteers"),
      },
      {
        path: "/admin/addEvent",
        element: <AddEvent></AddEvent>,
      },
    ],
  },
]);

export default router;
