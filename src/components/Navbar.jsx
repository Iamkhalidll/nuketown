"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "TOKENOMICS", href: "#tokenomics" },
    { title: "ABOUT", href: "#footer" },
    { title: "CONTACT", href: "#wallet" },
  ];

  return (
    <nav className=" text-white">
      <div className="relative">
        {/* Top bar with logo, text, and toggle */}
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-4">
            {/* Replace logo with "Let's Build Together" */}
            <a href="/" className="text-2xl md:text-4xl font-bold font-serif">
              Let's Build Together
            </a>
          </div>
          <div className="hidden md:flex text-2xl space-x-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hover:bg-gray-800 p-2 rounded transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>
          <button
            onClick={toggleMenu}
            className="text-white p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} size="3x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="3x" />
            )}
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute w-full bg-darkGray transition-all duration-300 ease-in-out md:hidden ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col text-2xl ">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className="border-b border-gray-800 last:border-b-0"
              >
                <a
                  href={item.href}
                  className="block p-4 hover:bg-gray-800 transition-colors"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
