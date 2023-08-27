import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root-layout";
import CategoriesPage from "../pages/categories";
import BusinessesPage from "../pages/businesses";
import ShopLayout from "../layouts/shop-layout";
import FitnessPage from "../pages/fitness";
import FiltersTestingPage from "../pages/filters-testing-page";
import Templates from "../pages/templates";
import MainPage from "../pages/main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
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
        path: "/shop/templates",
        element: <Templates />,
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
  {
    path: "/filters",
    element: <FiltersTestingPage />,
  },
]);
