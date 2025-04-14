import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Services from "../pages/Services";
import PurchasePage from "../pages/ PurchasePage";
import Home from "../pages/Home";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element:  <Home/> },
      { path: "/login", element: <Login /> },
      { path: "/services", element:<Services/>  },
      { path:"/purchase", element:<PurchasePage/>}
    ],
  },
]);

export default router;
