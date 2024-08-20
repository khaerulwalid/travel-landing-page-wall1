"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative bg-[url('/image/header/travel_header.jpg')] bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* Navbar */}
      <div className="py-4 fixed w-full bg-white/20">
        <div className="relative w-4/5 mx-auto py-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className=" text-2xl font-bold text-primary">Logo</h1>
            </div>
            <ul className="gap-4 text-white hidden lg:flex">
              <li>
                <a className={styleLinkNavbar}>Home</a>
              </li>
              <li>
                <a className={styleLinkNavbar}>Destinations</a>
              </li>
              <li>
                <a className={styleLinkNavbar}>Travel Packages</a>
              </li>
              <li>
                <a className={styleLinkNavbar}>Contact</a>
              </li>
              <li>
                <a className="py-2 px-4 bg-secondary hover:bg-accent hover:text-primary cursor-pointer">
                  Sign Up
                </a>
              </li>
            </ul>
            <span
              onClick={handleClick}
              className="lg:hidden inline text-white cursor-pointer"
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faBars} />
              ) : (
                <FontAwesomeIcon icon={faXmark} />
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="w-full min-h-[200vh] hover:bg-blue-600"></div>
    </div>
  );
};

const styleLinkNavbar =
  "py-2 px-4 hover:bg-accent hover:text-primary cursor-pointer transition-all duration-500 ease-in-out";

export default Navbar;
