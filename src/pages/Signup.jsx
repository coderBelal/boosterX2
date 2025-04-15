import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaGoogle,FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState({});
  const [isHuman, setIsHuman] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const confirmPassword = e.target.confirmPassword.value.trim();

    const errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!password) errors.password = "Password is required";
    if (password && password.length < 6)
      errors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";
    if (!isHuman) errors.captcha = "Please verify you're not a robot";

    setFormError(errors);

    if (Object.keys(errors).length === 0) {
      alert("Signed up successfully!");
      // You can add your signup logic here (e.g. Firebase signup)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center backdrop-blur-3xl bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
            <p className="text-gray-500 text-sm">Join and explore the dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaUser className="text-indigo-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your full name"
                />
              </div>
              {formError.name && (
                <p className="text-red-500 text-sm mt-1">{formError.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaEnvelope className="text-indigo-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="pl-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              {formError.email && (
                <p className="text-red-500 text-sm mt-1">{formError.email}</p>
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
                  className="pl-10 pr-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter password"
                />
                         <button
  type="button"
  onClick={toggleConfirmPassword}
  className="absolute inset-y-0 right-0 pr-3 flex items-center"
>
  {showConfirmPassword ? (
    <FaEyeSlash size={20} className="text-gray-400 hover:text-indigo-500" />
  ) : (
    <FaEye size={20} className="text-gray-400 hover:text-indigo-500" />
  )}
</button>
              </div>
              {formError.password && (
                <p className="text-red-500 text-sm mt-1">{formError.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <FaLock className="text-indigo-500" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  className="pl-10 pr-10 w-full py-3 px-4 bg-gray-50 border border-gray-200 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Confirm password"
                />
            <button
  type="button"
  onClick={toggleConfirmPassword}
  className="absolute inset-y-0 right-0 pr-3 flex items-center"
>
  {showConfirmPassword ? (
    <FaEyeSlash size={20} className="text-gray-400 hover:text-indigo-500" />
  ) : (
    <FaEye size={20} className="text-gray-400 hover:text-indigo-500" />
  )}
</button>
              </div>
              {formError.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{formError.confirmPassword}</p>
              )}
            </div>

            {/* I'm not a robot */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="captcha"
                checked={isHuman}
                onChange={(e) => setIsHuman(e.target.checked)}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <label htmlFor="captcha" className="text-sm text-gray-600">
                I’m not a robot
              </label>
            </div>
            {formError.captcha && (
              <p className="text-red-500 text-sm mt-1">{formError.captcha}</p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              Sign Up
            </button>

            {/* Google Sign In */}
            <button
              type="button"
              onClick={() => alert("Google sign-in logic here")}
              className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <FaGoogle className="mr-2 text-red-500" /> Sign Up with Google
            </button>
            <div>
                <h1 className=" text-center">Already have an account? <Link to="/login" className="   text-red-500">Log in here</Link>  </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
