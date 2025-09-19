import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Docs from "@/pages/docs";
import Colors from "@/pages/colors";
import NotFound from "@/pages/errors/not-found";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/docs/:section/:id?",
          element: <Docs />,
        },
        {
          path: "/colors",
          element: <Colors />,
        },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
