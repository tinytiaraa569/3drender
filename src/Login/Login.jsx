import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="w-full max-w-md border border-gray-100 space-y-8 bg-white p-10 rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-[#2d387d] text-center mb-8">Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Address */}
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaUser className="text-[#2d387d] mr-3" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-transparent text-[#2d387d] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-b-2 border-gray-300 py-2 relative">
            <FaLock className="text-[#2d387d] mr-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full bg-transparent text-[#2d387d] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <FaEyeSlash className="text-[#2d387d]" />
              ) : (
                <FaEye className="text-[#2d387d]" />
              )}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#2d387d] text-white font-semibold rounded-lg shadow-md hover:bg-[#1f2b5b] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Forgot password link */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#2d387d]">
            Forgot your password?{' '}
            <a href="#" className="text-[#2d387d] hover:text-indigo-700 font-semibold">
              Reset it here
            </a>
          </p>
        </div>

        {/* No account link */}
        <div className="text-center mt-4">
          <p className="text-sm text-[#2d387d]">
            Don't have an account?{' '}
            <Link to="/signup" className="text-[#2d387d] hover:text-indigo-700 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
