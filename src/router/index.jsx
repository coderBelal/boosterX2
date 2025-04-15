import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Services from "../pages/Services";
import PurchasePage from "../pages/ PurchasePage";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import ContactPage from "../pages/ContactPage";
import BlogHome from "../pages/BlogHome";
import BlogPost from "../pages/BlogPost";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element:  <Home/> },
      {path:"/contact",element:<ContactPage/>},
      {path:"/blog",element:<BlogHome/>},
     {path:"/post/:id", element:<BlogPost/>},
      { path: "/login", element: <Login /> },
      {path:"/signup",element:<Signup/>},
      { path: "/services", element:<Services/>  },
      { path:"/purchase", element:<PurchasePage/>}
    ],
  },
]);

export default router;
