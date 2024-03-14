import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./Pages/LoginPage/LoginPage"
import { MainPage } from "./Pages/MainPage/MainPage"
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage"
import "./App.css"
import { RegistrationPage } from "./Pages/RegistrationPage/RegistrationPage"
import { SearchPage } from "./Pages/SearchPage/SearchPage"

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
  }
])
function App() {
  

  return (
    <>
    <div>
      <RouterProvider router={routerConfig}/>
    </div>
    </>
  )
}

export default App
