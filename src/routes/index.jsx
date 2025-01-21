import { createBrowserRouter } from "react-router-dom";

import ProductsPage from "../pages/ProductsPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";
import DetailsPage from "../pages/DetailsPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProductsPage /> },
      { path: "/products/:id", element: <DetailsPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;
