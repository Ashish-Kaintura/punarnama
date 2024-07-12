"use client";
import React, { useState } from "react";
import RoomsAndSweets from "@/Components/RoomsAndSweets";
import Suites from "@/Components/Suites";

export default function RoomsAndSuitesSection() {
  // State to manage which section (Rooms or Suites) is active
  const [activeSection, setActiveSection] = useState("Rooms");

  // Function to handle click on Rooms button
  const showRooms = () => {
    setActiveSection("Rooms");
  };

  // Function to handle click on Suites button
  const showSuites = () => {
    setActiveSection("Suites");
  };

  return (
    <>
      <div className="justify-center py-12">
        <div className="sm:flex block sm:justify-evenly justify-center items-center sm:px-0 px-4">
          <div>
            <h2 className="text-3xl font-extralight font-raleway tracking-widest text-[#be9343]">
              ROOMS & SUITES
            </h2>
            <br />
            <p className="sm:w-[450px] font-sans text-sm">
              Punarnava Dehradun Resort and Spa, located on the foothills of the
              Himalayas, features 263 guest accommodations, including 24
              spacious suites and interconnecting and balcony rooms—each
              overlooking the picturesque Malsi Reserved Forest or the majestic
              Himalayan mountains.
            </p>
            <div className="gap-x-12 flex mt-8 pt-4">
              <button
                className={`font-raleway text-[#be9343] cursor-pointer uppercase  text-sm ${
                  activeSection === "Rooms" ? " border-b-2 border-[#be9343]" : ""
                }`}
                onClick={showRooms}
              >
                Rooms
              </button>
              <button
                className={`font-raleway text-[#be9343] cursor-pointer uppercase  text-sm ${
                  activeSection === "Suites" ? " border-b-2 border-[#be9343]" : ""
                }`}
                onClick={showSuites}
              >
                Suites
              </button>
            </div>
          </div>
          <div>
            <button className="px-4 py-2 sm:mt-0 mt-4 border-[#be9343] text-[#be9343] hover:bg-[#be9343] hover:text-white border-2 rounded-sm text-sm font-raleway tracking-widest shadow-xl">
              All Room & Suites
            </button>
          </div>
        </div>
        {/* Conditional rendering based on activeSection state */}
        {activeSection === "Rooms" && (
          <div className="Rooms">
            <RoomsAndSweets />
          </div>
        )}
        {activeSection === "Suites" && (
          <div className="Suites">
            <Suites />
          </div>
        )}
      </div>
    </>
  );
}
