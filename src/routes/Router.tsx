import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import LandingPage from "../pages/hero/LandingPage";
import Features from "../pages/hero/Features";
import Pricing from "../pages/hero/Pricing";
import Docs from "../pages/hero/Docs";
import NotFound from "../pages/utils/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
