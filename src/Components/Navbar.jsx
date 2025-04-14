import { useState } from "react";
import { FaRegAddressCard, FaBlogger, FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full  z-50 backdrop-blur-xl bg-white/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
          <div className="bg-white shadow-xl rounded-full p-1">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
                 B
              </div>
            </div>
            <h1 className="text-xl font-bold text-indigo-600"> Booster2X</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-black">
            {/* <Link to="/login" className="flex items-center gap-1 hover:text-indigo-500">
              <FaRegAddressCard /> Login
            </Link> */}
            <Link to="/contact" className="flex items-center gap-1 hover:text-indigo-500">
              <MdContactPhone /> Contact Us
            </Link>
            <Link to="/blog" className="flex items-center gap-1 hover:text-indigo-500">
              <FaBlogger /> Blog
            </Link>
            <Link to="/services" className="flex items-center gap-1 hover:text-indigo-500">
              <FaUserTie /> Services
            </Link>
          </div>

          {/* Right Side (Buttons + Toggle + Hamburger) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            {/* <div className="hidden md:flex items-center justify-between w-16 h-8 bg-white border rounded-full px-1 cursor-pointer">
              <BsSun className="text-indigo-500" />
              <BsMoon className="text-gray-400" />
            </div> */}

            {/* Auth Buttons */}
            <div className="hidden md:flex gap-2">
              <Link
                to="/login"
                className="border border-indigo-500 text-indigo-500 px-4 py-1.5 rounded-md hover:bg-indigo-50 text-sm font-semibold"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-indigo-500 text-white px-4 py-1.5 rounded-md hover:bg-indigo-600 text-sm font-semibold"
              >
                Sign Up
              </Link>
            </div>

            {/* Hamburger Icon (Mobile only) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-xl text-indigo-600"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-xl font-bold text-indigo-600">Menu</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl text-indigo-600">
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 text-black text-base font-medium">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <FaRegAddressCard /> About Us
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <MdContactPhone /> Contact Us
          </Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <FaBlogger /> Blog
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 hover:text-indigo-500">
            <FaUserTie /> Services
          </Link>

          <hr />

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="border border-indigo-500 text-indigo-500 px-4 py-2 rounded-md text-center"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="bg-indigo-500 text-white px-4 py-2 rounded-md text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        ></div>
      )}
    </>
  );
}
