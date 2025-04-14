import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaEye,
  FaShoppingCart,
  FaCrown,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const Hero = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    setUsernameError(!username);
    setPasswordError(!password);

    if (username && password) {
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="font-sans bg-gradient-to-br from-indigo-100 via-white to-pink-100 min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 py-12 gap-10 lg:gap-20">
        {/* Left side */}
        <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <div className="bg-white shadow-xl rounded-full p-2">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-xl">
                 B
              </div>
            </div>
            <h3 className="ml-3 text-2xl font-extrabold text-gray-800">Booster2X</h3>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            Premium SMM Panel
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              Provider In Bangladesh
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Elevate your social presence with our affordable, top-tier SMM services. Trust SMMRX to
            boost your growth and engagement like never before.
          </p>

          <div className="hidden lg:grid mt-10 grid-cols-4 gap-5">
            {[
              { icon: <FaShoppingCart />, title: "490,155", desc: "Orders" },
              { icon: <FaCrown />, title: "4,484", desc: "Services" },
              { icon: <FaUsers />, title: "22,291", desc: "Users" },
              { icon: <FaGlobe />, title: "#1", desc: "Ranking" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/90 backdrop-blur-md rounded-xl p-4 shadow hover:shadow-lg hover:scale-105 transform transition"
              >
                <div className="text-white bg-indigo-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 text-xl">
                  {item.icon}
                </div>
                <h3 className="text-center text-2xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-center text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Sign In to Dashboard</h2>
              <p className="text-gray-500 text-sm">Manage your panel with ease</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              {/* Username */}
              <div>
                <label htmlFor="username" className="text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaUser className="text-indigo-500" />
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Enter your username"
                  />
                </div>
                {usernameError && (
                  <p className="text-red-500 text-sm mt-1">Username is required</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaLock className="text-indigo-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="pl-10 pr-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <FaEye className="text-gray-400 hover:text-indigo-500" />
                  </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">Password is required</p>
                )}
              </div>

              {/* Extras */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <span>Remember Me</span>
                </label>
                <a href="#" className="text-indigo-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

 