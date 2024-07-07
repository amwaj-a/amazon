import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Login from "./Login";
import Signup from "./Signup";
import ErrorPage from "./ErrorPage";
import Cart from "./Cart";


function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },  {
      path: "/cart",
      element: <Cart/>,
    },
    {
      path: "/",
      element: <Home/>,
      errorElement: <ErrorPage />,

    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/details/:id",
      element: <Details/>,
    },
  ]);
  return (
    <RouterProvider router={router} />

  )
}

export default App
