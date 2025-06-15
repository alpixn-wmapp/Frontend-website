import React from "react";
import { FaArrowUp } from "react-icons/fa";

const frame1 = () => {
  // Function to open file dialog
  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="text-cyan-400 font-bold text-xl">NeuroForge</div>
        <div>
          <button className="bg-white text-black px-4 py-1 rounded hover:bg-zinc-800 hover:text-white">Sign In</button>
          <button className="bg-zinc-800 ml-2 text-white px-4 py-1 rounded hover:bg-white hover:text-zinc-800">Sign Up</button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16">
       <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 leading-relaxed">
        What do you want to Forge?
      </h1>

        <p className="text-gray-400 mt-2">
          Prompt, run, edit, and deploy full-stack <span className="font-semibold text-white">web</span> and <span className="font-semibold text-white">mobile</span> apps.
        </p>

         {/* Prompt Box */}
        <div className="mt-10 w-full max-w-4xl mx-auto relative">
          <div className="bg-black border border-gray-600 rounded-md overflow-hidden">
            <textarea
              className="w-full bg-transparent text-white p-4 resize-none focus:outline-none"
              placeholder="Ask us to create a prototype..."
              rows={2}
            ></textarea>

            {/* Inline buttons inside the same container */}
            <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-400 border-0">
              <div className="flex gap-4">
                <button className="hover:text-white flex items-center gap-1">📎 Attach</button>
                <button className="hover:text-white flex items-center gap-1">📂 Model</button>
              </div>
              <div className="hover:text-white flex items-center gap-2 cursor-pointer ml-4">
                <span>🔓 Public</span>
                <button className="w-8 h-8 bg-white text-black px-2 py-1 rounded-full text-sm font-extrabold"><FaArrowUp /></button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex justify-center items-center gap-3 text-sm flex-nowrap">

            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={(e) => console.log("File selected:", e.target.files[0])}
            />
            <button
              className="bg-zinc-800 px-4 py-2 rounded border border-gray-600 hover:bg-zinc-700 whitespace-nowrap"
              onClick={handleFileClick}
            >
              📸 Clone a Screenshot
            </button>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-800 px-4 py-2 rounded border border-gray-600 hover:bg-zinc-700 whitespace-nowrap"
            >
              📥 Import from Figma
            </a>
            <button className="bg-zinc-800 px-4 py-2 rounded border border-gray-600 hover:bg-zinc-700 whitespace-nowrap">
              🧱 Landing Page
            </button>
            <button className="bg-zinc-800 px-4 py-2 rounded border border-gray-600 hover:bg-zinc-700 whitespace-nowrap">
              🧮 Calculate Factorial
            </button>
          </div>
        </div>
      </section>

      {/* Community Projects Grid */}
      <section className="px-6 pb-20">
        <h2 className="text-xl mb-4">From the Community</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "Floating Bubbles",
            "File Manager",
            "Product Launch Wishlist",
            "New Geometric Background",
            "Next.js + Charts",
            "Vidy",
            "Next.js Conf 2024",
            "Tetris",
            "Stackblitz Starter",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg h-40 flex items-center justify-center text-center text-white font-medium mx-auto w-full max-w-[350px]"
            >
              {title}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="text-blue-400 hover:underline">Load More</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 p-6 text-sm text-gray-400">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Company", "Product", "Resources", "Legal", "Socials"].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white mb-2">{section}</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Link 1</a></li>
                <li><a href="#" className="hover:underline">Link 2</a></li>
                <li><a href="#" className="hover:underline">Link 3</a></li>
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-6">© 2025 NeuroForge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default frame1;
