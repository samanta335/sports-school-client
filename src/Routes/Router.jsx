import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Home/ErrorPage/ErrorPage";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Layout/Dashboard";
import ManageUser from "../Pages/Dashboard/AdminDashboard/ManageUser/ManageUser";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass/MyClass";
import ManageClass from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import SelectedClass from "../Pages/Dashboard/StudentDashboard/SelectedClass/SelectedClass";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import EnrollClass from "../Pages/Dashboard/StudentDashboard/EnrolledClass/EnrollClass";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <ClassesPage></ClassesPage>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin route
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageClass",
        element: (
          <AdminRoute>
            <ManageClass></ManageClass>
          </AdminRoute>
        ),
      },
      // instructor route
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorRoute>
            <MyClass></MyClass>
          </InstructorRoute>
        ),
      },
      // student route
      {
        path: "selectClass",
        element: <SelectedClass></SelectedClass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolledClass",
        element: <EnrollClass></EnrollClass>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
export default router;
