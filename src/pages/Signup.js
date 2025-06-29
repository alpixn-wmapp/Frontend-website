import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-10 bg-gradient-to-bl from-black via-[#010f1c] to-[#010b15] text-white">
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Power On <span className="text-blue-400">Your AI Identity</span>
        </h1>
        <p className="text-gray-300 text-sm leading-relaxed">
          Join Our Neural Network To Build, Chat, And Automate With Intelligence
        </p>
        <p
          className="text-sm mt-4 text-blue-400 underline cursor-pointer"
          onClick={() => navigate('/signin')}
        >
          Already Have An Account? Sign In
        </p>
      </div>

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-blue-500 rounded-2xl px-6 py-8 shadow-lg shadow-blue-500/30">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          Activate Your AI Access
        </h2>
        <p className="text-gray-400 text-sm text-center mb-6">
          Join The Future Of Interaction Powered By Intelligence
        </p>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              minLength={3}
              required
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-white"
            />
          </div>

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
              placeholder="Create Password"
              minLength={8}
              required
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-white pr-10"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Confirm Password"
              minLength={8}
              required
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400 text-white pr-10"
            />
            <div
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-blue-600 text-black font-semibold rounded-lg hover:opacity-90 transition duration-200"
          >
            Get Started
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-4">
          Accept <span className="text-blue-400 underline cursor-pointer">Terms & Privacy</span> While Signing Up
        </p>
      </div>
    </div>
  );
};

export default Signup;
