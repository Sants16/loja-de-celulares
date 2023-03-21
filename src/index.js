import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./pages/Store";
import Access from "./pages/Access";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Payment from "./pages/Payment";
import { Loading } from "./components/Loading";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Access />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit",
        element: <ProfileEdit />,
      },
      {
        path: "payment/:status/:price?",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/loading/:returnTo",
    element: <Loading />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
