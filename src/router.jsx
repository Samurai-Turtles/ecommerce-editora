import LoginPage from "@/pages/Login";
import ShoppingCart from "@/pages/ShoppingCart";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Root route</h1>,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/signup",
    element: <h1>Signup route</h1>,
  },
  {
    path: "/orders",
    element: <h1>Orders route</h1>,
  },
  {
    path: "/products",
    element: <h1>Products route</h1>,
  },
  {
    path: "/cart",
    Component: ShoppingCart,
  },
  {
    path: "/payment",
    element: <h1>Payment route</h1>,
  },
]);

export default router;
