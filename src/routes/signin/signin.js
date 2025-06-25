import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/signup");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-blue-900 to-black font-oxygen">

      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full opacity-80 z-0 rounded-2xl overflow-hidden">
        <img
          src="/signin_bg.png"
          alt="background"
          className="w-full h-full bg-cover"
        />
      </div>

      {/* Foreground Content */}
      <div className="text-center px-4 relative z-10">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
          Welcome Back, Human
        </h1>
        <p className="text-white/70 text-sm md:text-base mb-8">
          Let’s Continue Your Intelligent Journey
        </p>

        <div className="bg-black/30 backdrop-blur-md rounded-xl border border-yellow-400 max-w-md w-full mx-auto p-6 md:p-8">
          <h2 className="text-white text-lg md:text-xl font-semibold mb-1 text-center">
            Re-Connect To The Neural Network
          </h2>
          <p className="text-white/60 text-sm mb-6 text-center">
            Enter Your Credentials To Continue Your Journey
          </p>

          <form className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="text-white text-sm block mb-1 text-left">
                Enter Email ID
              </label>
              <input
                type="email"
                id="email"
                placeholder="e.g. abcd@gmail.com"
                className="w-full px-4 py-2 rounded-xl bg-transparent border border-white text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="text-white text-sm block mb-1 text-left">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="*********"
                  className="w-full px-4 py-2 pr-10 rounded-xl bg-transparent border border-white text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-white/50 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.992 12c1.248 3.624 4.742 6.5 10.008 6.5 5.266 0 8.76-2.876 10.008-6.5a10.477 10.477 0 00-1.988-3.777M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-yellow-400 text-black font-semibold hover:opacity-90 cursor-pointer"
            >
              Login Securely
            </button>

            {/* Redirect Text */}
            <p className="text-white/70 text-sm text-center mt-4">
              If you don’t have an account?{" "}
              <button
                type="button"
                onClick={handleRedirect}
                className="text-white font-semibold underline cursor-pointer"
              >
                Create New
              </button>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
