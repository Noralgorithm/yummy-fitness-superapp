import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import CategoriesPage from "../pages/categories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/businesses",
        element: <h1>Negocios</h1>,
      },
      {
        path: "/businesses/[business_id]",
        element: <h1>Productos</h1>,
      },
      {
        path: "/businesses/[business_id]/[product_id]",
        element: <h1>Info. de producto</h1>,
      },
    ],
  },
]);
