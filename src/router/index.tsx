import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import CategoriesPage from "../pages/categories";
import BusinessesPage from "../pages/businesses";
import ShopLayout from "../layouts/shop-layout";
import FitnessPage from "../pages/fitness";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
    ],
  },
  {
    path: "/shop",
    element: <ShopLayout />,
    children: [
      {
        path: "/shop/businesses",
        element: <BusinessesPage />,
      },
      {
        path: "/shop/fitness",
        element: <FitnessPage />,
      },
      {
        path: "/shop/businesses/[business_id]",
        element: <h1>Productos</h1>,
      },
      {
        path: "/shop/businesses/[business_id]/[product_id]",
        element: <h1>Info. de producto</h1>,
      },
    ],
  },
]);
