import React from "react";
import { FaHeadset } from "react-icons/fa";
 
 
const Footer = () => {
  return (
    <footer className=" backdrop-blur-xl bg-white/50  text-black py-8">
      
    <div className="container mx-auto px-4 text-center">
      <div className="flex justify-center items-center mb-4">
        <FaHeadset className="text-2xl mr-2 text-blue-400" />
        <h3 className="text-xl font-semibold">Need Help? We're Always Here For You</h3>
      </div>
      <p className="mb-4">© 2025 SMMRX. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          Terms of Service
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          FAQ
        </a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
