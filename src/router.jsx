import LoginPage from "@/pages/Login";
import OrdersPage from "@/pages/Orders";
import ShoppingCart from "@/pages/ShoppingCart";
import PixPage from "@/pages/PixPayment";
import OrderSubmittedPage from "@/pages/OrderSubmitted";
import CreditCardPage from "./pages/CreditCardPayment";
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
    Component: OrdersPage,
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
  {
    path: "/pix",
    Component: PixPage,
  },
  {
    path: "/order-submitted",
    Component: OrderSubmittedPage,
  },
  {
    path: "/credit-card",
    Component: CreditCardPage,
  },
]);

export default router;