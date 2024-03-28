import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage/SearchPage.tsx";
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage.tsx";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage.tsx";
import { MainPage } from "./Pages/MainPage/MainPage.tsx";
import { LoginPage } from "./Pages/LoginPage/LoginPage.tsx";
import { DetailsPage } from "./Pages/DetailsPage/DetailsPage.tsx";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/main",
    element: <MainPage/>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/registration",
    element: <RegistrationPage/>
  },
  {
    path: "/search",
    element: <SearchPage/>
  },
  {
    path: "/details",
    element: <DetailsPage/>
  }
])
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={routerConfig}/>
    </Provider>
  </React.StrictMode>
);
