import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactButtons from "../Components/ContactButtons";

export default function MainLayout() {
  return (
    <div>
 <Navbar/>
      <div  >
        <Outlet />
      </div>
      <ContactButtons/>
      <Footer/>
    </div>
  );
}
