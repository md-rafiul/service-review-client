import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home";
import Login from "../../components/LogIn/Login";
import ServiceDetails from "../../components/Services/ServiceDetails/ServiceDetails";
import Services from "../../components/Services/Services/Services";
import SignUp from "../../components/SignUp/SignUp";
import MainLayout from "../../Layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
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
