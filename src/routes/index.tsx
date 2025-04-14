import "../index.css";

import { AppLayout } from "../layout/AppLayout";
import { SignIn } from "../pages/auth/Sign-In";
import { AuthLayout } from "../layout/AuthLayout";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/app/Dashboard";
import { SignUp } from "../pages/auth/sign-up";

export const IndexRoutes = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
    ],
  },
  {
    path: "/", 
    element: <AuthLayout />,
    children: [
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> }, 
    ],
  },
]);
