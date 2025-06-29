import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaCubes,
  FaLayerGroup,
  FaProjectDiagram,
  FaDownload,
  FaSignOutAlt,
} from "react-icons/fa";
import { TiExport } from "react-icons/ti";
import { FiCodesandbox } from "react-icons/fi";
import { GiAlliedStar } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPatchQuestionFill } from "react-icons/bs";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: FiCodesandbox, label: "About Product", route: "about-product" },
    {
      icon: GiAlliedStar,
      label: "All Features Overview",
      route: "features-overview",
    },
    {
      icon: RiCustomerService2Fill,
      label: "Contact Support",
      route: "support",
    },
  ];

  return (
    <aside className="w-72 h-screen bg-gradient-to-b z-30 fixed from-[#0b1522] via-[#071b33] to-[#163256] flex flex-col border-r border-white/10 gap-[60px]  py-4 px-4">
      <div>
        <img
          className="mb-8 size-100"
          src="/images/logo.svg"
          alt="NeuraForge Logo"
        />
      </div>
      <div className="">
        <div className="flex flex-col gap-4 items-center">
          <button className="bg-white text-[#0099ff] font-[600] shadow-lg rounded-lg w-[80%] py-2">
            Login to Continue
          </button>
          <p className="text-[.75rem] text-white">
            If you don't have an account?{" "}
            <a href="#" className="hover:underline">
              Create New
            </a>
          </p>
        </div>
        <ul className="flex flex-col gap-1  space-y-1 border-t-[1px] border-b-[1px] border-white/30 py-6 px-4 my-4">
          {navItems.map(({ icon: Icon, label, route }, index) => {
            const isActive = location.pathname.includes(route);
            return (
              <li
                key={index}
                onClick={() => navigate(`/${route}`)}
                className={`flex items-center py-3 px-3 rounded cursor-pointer transition duration-200
                  ${
                    isActive
                      ? "bg-[#0a2540] text-blue-400"
                      : "text-white hover:bg-[#0a2540]"
                  }`}
              >
                <Icon className="mr-3" size={23} />
                <span className="text-sm">{label}</span>
              </li>
            );
          })}
        </ul>
        <div className="text-white flex items-center justify-center gap-4">
          <BsPatchQuestionFill size={20} />
          <p>Need Help Loggin in ?</p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
