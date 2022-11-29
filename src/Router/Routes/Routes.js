import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home";
import Login from "../../components/LogIn/Login";
import MyReviews from "../../components/MyReviews/MyReviews";
import ServiceDetails from "../../components/Services/ServiceDetails/ServiceDetails";
import Services from "../../components/Services/Services/Services";
import SignUp from "../../components/SignUp/SignUp";
import MainLayout from "../../Layout/MainLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://service-review-server-assignment-11.vercel.app/"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch(
            "https://service-review-server-assignment-11.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-assignment-11.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
