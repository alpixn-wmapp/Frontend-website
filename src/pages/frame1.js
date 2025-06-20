import React from "react";
import { FaArrowUp } from "react-icons/fa";
const footerData = [
  {
    title: "Company",
    links: ["Blog", "Careers"]
  },
  {
    title: "Product",
    links: ["Import from Figma", "Become a Partner", "Roadmap", "Status", "Changelog", "Pricing", "Solutions", "Hire a Partner"]
  },
  {
    title: "Resources",
    links: ["Launched", "Enterprise", "Learn", "Integrations", "Affiliates", "Brand", "Guidelines"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms & Conditions", "Report Abuse"]
  },
  {
    title: "Socials",
    links: ["X/Twitter", "LinkedIn", "Discord", "Reddit"]
  }
];

const frame1 = () => {
  // Function to open file dialog
  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      {/* Header */}
      <>
  {/* Navbar */}
  <header className="bg-black flex justify-between items-center p-4 border-b border-gray-700">
    <div className="flex items-center space-x-2">
      <img src="/logo192.png" alt="logo" className="h-6 w-6" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 text-xl font-logo">
        NeuraForge
      </span>
    </div>
    <div>
      <button className="bg-white text-black px-4 py-1 rounded hover:bg-zinc-800 hover:text-white">Sign In</button>
      <button className="bg-zinc-800 ml-2 text-white px-4 py-1 rounded hover:bg-white hover:text-zinc-800">Sign Up</button>
    </div>
  </header>

  {/* Notification Bar */}
  <div className="px-4 py-2 border-0 flex justify-end items-center">
    <div className="bg-white text-black text-sm rounded px-3 py-1 flex items-center space-x-1 hover:bg-gray-200 cursor-pointer transition">
      <span>The NeuraForge in beta.</span>
      <button className="text-xs text-blue-600 hover:underline">Learn More &gt;</button>
    </div>
  </div>
</>


      {/* Hero */}
      <section className="text-center py-16">
       <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700 leading-relaxed">
        What do you want to Forge?
      </h1>

        <p className="text-gray-400 mt-2">
          Prompt, run, edit, and deploy full-stack <span className="font-semibold text-white">web</span> and <span className="font-semibold text-white">mobile</span> apps.
        </p>

         {/* Prompt Box */}
        <div className="mt-10 max-w-2xl mx-auto relative">
          <div className="bg-black border border-gray-700 rounded-2xl overflow-hidden">
            <textarea
              className="w-full bg-transparent text-white p-4 resize-none focus:outline-none rounded-lg"
              placeholder="Ask us to create a prototype..."
              rows={1}
              style={{ height: "70px" }}
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
              className="bg-black px-4 py-2 rounded-full border border-gray-600 hover:bg-zinc-700 whitespace-nowrap"
              onClick={handleFileClick}
            >
              📸 Clone a Screenshot
            </button>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black px-4 py-2 rounded-full border border-gray-600 hover:bg-zinc-700 whitespace-nowrap"
            >
              📥 Import from Figma
            </a>
            <button className="bg-black px-4 py-2 rounded-full border border-gray-600 hover:bg-zinc-700 whitespace-nowrap">
              🧱 Landing Page
            </button>
            <button className="bg-black px-4 py-2 rounded-full border border-gray-600 hover:bg-zinc-700 whitespace-nowrap">
              🧮 Calculate Factorial
            </button>
          </div>
        </div>
      </section>

      {/* Community Projects Grid */}
        <section className="pb-16 bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold mb-1">From the Community</h2>
            <p className="text-sm text-gray-400 mb-6">
              Explore what the community is building with NeuraForge.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Floating Bubbles",
                  image: "/Main_Images/Floating_Bubbles.png",
                  avatar: "/Side_Image/Img1.png",
                  forks: "4.4K",
                },
                {
                  title: "File Manager",
                  image: "/images/filemanager.png",
                  avatar: "/Side_Image/Img2.jpg",
                  forks: "6.7K",
                },
                {
                  title: "Product Launch Waitlist",
                  image: "/Main_Images/Third_image.png",
                  avatar: "/Side_Image/Img3.jpg",
                  forks: "4.7K",
                },
                {
                  title: "Hero Geometric Background",
                  image: "/Main_Images/Elevate.png",
                  avatar: "/Side_Image/Img4.png",
                  forks: "13K",
                },
                {
                  title: "Next.js + Charts",
                  image: "/Main_Images/Chart.png",
                  avatar: "/Side_Image/Img1.png",
                  forks: "5.1K",
                },
                {
                  title: "Vidzify",
                  image: "/Main_Images/Transform.png",
                  avatar: "/Side_Image/Img2.jpg",
                  forks: "13.9K",
                },
                {
                  title: "Next.js Conf 2024",
                  image: "/Main_Images/Next.png",
                  avatar: "/Side_Image/Img3.jpg",
                  forks: "7.7K",
                },
                {
                  title: "Tetris",
                  image: "/Main_Images/Tetris.png",
                  avatar: "/Side_Image/Img4.png",
                  forks: "4.4K",
                },
                {
                  title: "Supabase Starter",
                  image: "/Main_Images/Icon.png",
                  avatar: "/Side_Image/Img1.png",
                  forks: "6.8K",
                },
              ].map((item, index) => (
                <div key={index}>
                  {/* Image Card */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-lg w-full object-cover h-48 bg-gray-100"
                  />

                  {/* Below Content */}
                  <div className="flex items-center gap-3 mt-3 px-1">
                    <img
                      src={item.avatar}
                      alt="avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <div className="text-sm leading-tight">
                      <p className="text-white">{item.title}</p>
                      <div className="flex items-center text-gray-400 text-xs mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 00-8 0v4H5l7 7 7-7h-3V7z"
                        />
                        </svg>
                        {item.forks} Forks
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="relative text-sm bg-gradient-to-r from-blue-800 to-cyan-500 bg-clip-text text-transparent font-semibold">
                <span className="after:content-[''] after:block after:h-[1px] after:bg-gradient-to-r after:from-blue-800 after:to-cyan-500 after:w-full after:mt-0.5">
                Load More
                </span>
              </button>
            </div>
          </div>
        </section>
      {/* Footer */}
      <footer className="bg-black p-6 text-sm text-gray-400">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {footerData.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white mb-2">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-500">
          By messaging NeuraForge, you agree to our{" "}
          <a href="#" className="underline hover:text-white">Terms</a> and{" "}
          <a href="#" className="underline hover:text-white">AI Policy</a>.
        </p>

        {/* Footer navigation links */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-white">
          <a href="#" className="hover:text-white ml-10">Pricing</a>
          <a href="#" className="hover:text-white">Enterprise</a>
          <a href="#" className="hover:text-white">FAQ</a>
          <a href="#" className="hover:text-white">Legal</a>
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Forge Community</a>
          <a href="#" className="hover:text-white flex items-center gap-1">
            Forge <span className="inline-block">↗</span> {/* optional external icon */}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default frame1;
