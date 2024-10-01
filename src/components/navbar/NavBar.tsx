"use client";

import React, { useState } from "react";
import { ActiveLink } from "../active-link/ActiveLink";


const navItems = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
  { path: "/projects", text: "Projects" },
  { path: "/contact", text: "Contact" },
];


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLinkClick = () => {
    setIsOpen(false);
  };


  return (
    <div className="relative p-4 flex justify-center">
      <nav className="flex justify-between w-8/12 items-center rounded-full p-2 shadow-[#fffeff80] shadow-inner bg-[#212259] text-[#999ee0]">
        {/* Logo Section */}
        <div className="text-xl font-bold px-4">
          <span>Logo</span>
        </div>
        {/* Mobile Menu Button (Hamburger Icon) */}
        <div className="md:hidden px-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-[#999ee0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hamburger Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
            {navItems.map((navItem) => (
            <ActiveLink key={navItem.path} {...navItem} />
            ))}
        </div>
        {/* Social Media Button */}
        <div className="hidden md:block">
          <button className="px-4">Social Media</button>
        </div>
      </nav>
      {/* Dark Overlay when Menu is Open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu} />
      )}
      {/* Mobile Slide-out Menu */}
      <div className={`fixed top-0 right-0 h-full w-2/4 bg-[#212259] text-[#999ee0] shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full" }`} >
        {/* X Icon to close the menu */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* X Icon */}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Menu Links */}
        {navItems.map((navItem) => (
        <ActiveLink   onClick={handleLinkClick}     key={navItem.path} {...navItem} />
      ))}
      </div>
      
    </div>
  );
};

export default NavBar;