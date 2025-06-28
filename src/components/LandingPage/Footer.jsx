import React from "react";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaRedditAlien,
} from "react-icons/fa6";
import GetStarted from "./GetStarted";

const Footer = () => {
  const links = [
    {
      heading: "Company",
      items: ["Home", "About", "Services", "Blog", "Contact"],
    },
    {
      heading: "Product",
      items: [
        "Import Form Figma",
        "Become A Partner",
        "Roadmap",
        "Status",
        "Change Log",
        "Pricing",
        "Solutions",
        "Hire a Partner",
      ],
    },
    {
      heading: "Resources",
      items: [
        "Launched",
        "Enterprise",
        "Learn",
        "Support",
        "Integration",
        "Affiliates",
        "Brand",
        "Guidelines",
      ],
    },
    {
      heading: "Legal",
      items: ["Privacy Policy", "Terms & Conditions", "Report Abuse"],
    },
  ];

  const socialIcons = [
    {
      icon: <FaXTwitter />,
      label: "Twitter",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      icon: <FaRedditAlien />,
      label: "Reddit",
    },
  ];

  return (
    <footer className=" relative bg-gradient-to-br from-[#000] via-[#061927] to-[#000] text-white px-10 pt-[15%]">
      <GetStarted />
      <div className=" justify-items-center max-w-[1300px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 ">
        {links.map((section, i) => (
          <div key={i}>
            <h3 className="font-semibold text-2xl mb-2">{section.heading}</h3>
            <ul className="space-y-1 text-white/80">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div>
          <h3 className="font-semibold text-2xl mb-2">Social</h3>
          <ul className="space-y-2 text-white/80">
            {socialIcons.map((social, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-white transition cursor-pointer"
              >
                {social.icon}
                <span>{social.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Optional bottom notice */}
      <p className="text-center text-sm text-white/75 mt-[10%] pb-2">
        By messaging NeuraForge, you agree to our{" "}
        <span className="underline cursor-pointer">Terms</span> and{" "}
        <span className="underline cursor-pointer">AI Policy</span>.
      </p>
    </footer>
  );
};

export default Footer;
