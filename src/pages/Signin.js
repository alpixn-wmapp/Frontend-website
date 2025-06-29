import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-black via-[#010f1c] to-[#010b15] px-4 py-10 text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Welcome Back, Human</h1>
        <p className="text-gray-300 text-sm mt-2">Let’s Continue Your Intelligent Journey</p>
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-blue-500 rounded-2xl px-6 py-8 shadow-lg shadow-blue-500/30">
        <h2 className="text-xl font-bold text-center mb-6">Re-Connect To The Neural Network</h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Enter Your Credentials To Continue Your Journey
        </p>

        <form className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter Email ID"
              required
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-white"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              required
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-white pr-10"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            <div className="text-right mt-1">
              <span
                className="text-blue-400 text-xs hover:underline cursor-pointer"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition"
          >
            Login Securely
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          If you don’t have an account?{' '}
          <span
            className="text-blue-400 hover:underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Create New
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
