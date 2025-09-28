import LoginPage from "@/pages/Login";
import SignupPage from "@/pages/Signup";
import ProductsPage from "@/pages/Products";
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
    Component: SignupPage,
  },
  {
    path: "/orders",
    element: <h1>Orders route</h1>,
  },
  {
    path: "/products",
    Component: ProductsPage,
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
