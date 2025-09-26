import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Root route</h1>,
  },
  {
    path: "/login",
    element: <h1>Login route</h1>,
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
    element: <h1>Cart route</h1>,
  },
  {
    path: "/payment",
    element: <h1>Payment route</h1>
  },
]);

export default router;
