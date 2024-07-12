// import React from "react";
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/Images/Logo/Punarnnava New Logo-.png";
import TextLogo from "@/public/Images/Logo/Punarnnava text.png";
import BlackLogo from "@/public/Images/Logo/Punarnnava black text.png";
import { TiThMenu, TiTimes } from "react-icons/ti";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [isNav1Hidden, setIsNav1Hidden] = useState(false);
  const [isNav2Sticky, setIsNav2Sticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsNav1Hidden(scrollTop > 0); // Hide Nav1 if scrolled down
      setIsNav2Sticky(scrollTop > 0); // Make Nav2 sticky if scrolled down
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`Nav1 flex justify-between mx-auto px-8 bg-white py-4 items-center ${
          isNav1Hidden ? "hidden" : ""
        }`}
      >
        <div className="flex items-center">
          <div></div>
          <div>
            <a href="/">
              {" "}
              <Image
                className=" "
                src={BlackLogo}
                alt="Logo"
                width={140}
                height={40}
              />
            </a>
          </div>
        </div>

        <div className="flex gap-x-2 items-center text-black">
          <div className=" sm:flex hidden items-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 "
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <a
              className=" font-sans text-sm sm:block hidden"
              href="mailto: Book@punarnava.com"
            >
              {" "}
              Book@thepunarnava.com 
            </a>
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu  z-20">
              <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            </div>
          )}
          <div className=" w-8 h-8 rounded-full flex items-center text-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10 "
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h2 className=" font-sans  text-sm xl:block hidden">
              Sign In or Join
            </h2>
          </div>
          <div className="block items-center">
            <button
              onClick={handleDropdownToggle}
              className="cursor-pointer flex justify-center relative"
            >
              {dropdownOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <nav
        className={`Nav2 flex justify-between mx-auto lx:px-8 px-2 py-4 text-white items-center fixed w-full z-[10] ${
          isNav2Sticky ? "top-0" : ""
        }`}
        style={{
          background: "rgb(16,16,17)",
          backgroundImage:
            "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(54,56,58,1) 91%)",
        }}
      >
        <div className="">
          <h2 className="text-lg font-sans uppercase xl:flex hidden">
            The punarnava resort Luxury resorts in uttarakhand
          </h2>
        </div>
        <div className=" flex justify-start items-center  w-[450px]">
          <div>
            <a href="/">
              {" "}
              <Image
                className=" "
                src={Logo}
                alt="Logo"
                width={60}
                height={40}
              />
            </a>
          </div>
          <div>
            <a href="/">
              {" "}
              <Image
                className=" "
                src={TextLogo}
                alt="Logo"
                width={160}
                height={40}
              />
            </a>
          </div>
        </div>

        <div>
          <button className="px-4 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block ">
            Book Now
          </button>
        </div>
        <div>
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <TiTimes className=" size-8" />
            ) : (
              <TiThMenu className=" size-8" />
            )}
          </button>
        </div>
      </nav>
      {/* phone nav  */}
      <div
        className={`sidenav ${isMenuOpen ? "open" : ""} block  z-20
        `}
      >
           <nav
        className={`Nav2 flex justify-between mx-auto lx:px-8 px-2 py-4 text-white items-center fixed w-full z-[20] ${
          isNav2Sticky ? "top-0" : ""
        }`}
        style={{
          background: "rgb(16,16,17)",
          backgroundImage:
            "linear-gradient(90deg, rgba(16,16,17,1) 0%, rgba(54,56,58,1) 91%)",
        }}
      >
        <div className="">
          <h2 className="text-lg font-sans uppercase xl:flex hidden">
            The punarnava resort Luxury resorts in uttarakhand
          </h2>
        </div>
        <div className=" flex justify-start items-center  w-[450px]">
          <div>
            <a href="/">
              {" "}
              <Image
                className=" "
                src={Logo}
                alt="Logo"
                width={60}
                height={40}
              />
            </a>
          </div>
          <div>
            <a href="/">
              {" "}
              <Image
                className=" "
                src={TextLogo}
                alt="Logo"
                width={160}
                height={40}
              />
            </a>
          </div>
        </div>

        <div>
          <button className="px-4 py-2 bg-white rounded-sm  text-black shadow-lg  hidden xl:block ">
            Book Now
          </button>
        </div>
        <div>
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? (
              <TiTimes className=" size-8" />
            ) : (
              <TiThMenu className=" size-8" />
            )}
          </button>
        </div>
      </nav>
        <ul className="pt-28">
          <li>hvvh</li>
          <li>hvvh</li>
          <li>hvvh</li>
          <li>hvvh</li>
          <li>hvvh</li>
        </ul>
      </div>
    </div>
  );
}
