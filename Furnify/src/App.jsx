/* eslint-disable no-unused-vars */
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  LandingError,
} from "./Pages/index";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./Pages/Landing";
import { loader as SingleProductLoader } from "./Pages/SingleProduct";
import { loader as ProductsLoader } from "./Pages/Products";
import { loader as checkoutLoader } from "./Pages/Checkout";
import { loader as ordersLoader } from "./Pages/Orders";
import { action as registerAction } from "./Pages/Register";
import { action as loginAction } from "./Pages/Login";
import { action as checkoutAction } from "./Components/CheckoutForm";
import store from "./store";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <LandingError />,
          loader: landingLoader(queryClient),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
          loader: checkoutLoader(store),
          action: checkoutAction(store, queryClient),
        },
        {
          path: "Orders",
          element: <Orders />,
          loader: ordersLoader(store, queryClient),
        },
        {
          path: "products",
          element: <Products />,
          loader: ProductsLoader(queryClient),
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader(queryClient),
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
      action: loginAction(store),
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
      action: registerAction,
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
