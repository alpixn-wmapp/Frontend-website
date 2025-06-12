// src/components/PromptBox.js
import React, { useState, useEffect, useRef } from "react";
import { FaPaperclip, FaGlobe } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import "./PromptBox.css";

const PromptBox = () => {
  const [selectedModel, setSelectedModel] = useState("model");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAttachEnabled, setIsAttachEnabled] = useState(false);
  const [isPublicSelected, setIsPublicSelected] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleModelSelect = (model) => {
    if (model === "clear") {
      setSelectedModel("model");
      setIsAttachEnabled(false);
    } else {
      setSelectedModel(model);
      setIsAttachEnabled(true);
    }
    setDropdownOpen(false);
  };

  const handleAttachClick = () => {
    if (isAttachEnabled) {
      document.getElementById("fileUploadInput").click();
    }
  };

  return (
    <div className="prompt-box">
      <textarea
        className="prompt-textarea"
        placeholder="Ask us to create a prototype..."
      />
      <div className="prompt-controls">
        <div className="left-controls">
          <button
            className={`icon-button ${isAttachEnabled ? "enabled" : "disabled"}`}
            onClick={handleAttachClick}
          >
            <FaPaperclip /> Attach
          </button>
          <input
            type="file"
            id="fileUploadInput"
            style={{ display: "none" }}
            onChange={(e) => alert(`Selected file: ${e.target.files[0].name}`)}
          />
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedModel} ▼
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleModelSelect("GPT-4")}>GPT-4</li>
                <li onClick={() => handleModelSelect("CodeGen")}>CodeGen</li>
                <li onClick={() => handleModelSelect("Custom")}>Custom</li>
                <li onClick={() => handleModelSelect("clear")}>Clear</li>
              </ul>
            )}
          </div>
        </div>
        <div className="right-controls">
          <span
            className={`public-label ${isPublicSelected ? "active" : ""}`}
            onClick={() => setIsPublicSelected(!isPublicSelected)}
          >
            <FaGlobe /> Public
          </span>
          <button className="submit-button">
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromptBox;
