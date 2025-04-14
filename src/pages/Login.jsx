import { useState } from "react";
import { FaUser, FaLock, FaEye } from "react-icons/fa";

export default function Login() {
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
    <div className="min-h-screen flex items-center justify-center   backdrop-blur-3xl bg-gradient-to-br from-indigo-100 via-white to-pink-100">
      {/* Centered Login Box */}
      <div className="w-full max-w-md">
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
  );
}
