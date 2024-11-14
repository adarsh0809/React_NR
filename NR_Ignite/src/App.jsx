import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Main from "./components/Main";
import ResDetails from "./components/ResDetails";
import { Provider } from "react-redux";
import AppStore from "./utility/AppStore";

// Router Configuration created using createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/resturant/:resID",
        element: <ResDetails />,
      },
    ],
  },
]);

// Using RouterProvider Routing was esatablished in the application
const App = () => {
  return (
    <Provider store={AppStore}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
};

export default App;
