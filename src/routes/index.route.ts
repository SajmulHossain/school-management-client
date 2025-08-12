import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import LoginPage from "@/pages/Login";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path: "/dashboard",
    Component: DashboardLayout
  },
  {
    path: "/login",
    Component: LoginPage
  }
]);

export default router;
