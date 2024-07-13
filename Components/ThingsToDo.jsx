import React from "react";
import { FaArrowRight } from "react-icons/fa";

const thingsToDo = [
  { name: "Candel Light Dinner" },
  {
    name: "Tracking Activites",

  },
  { name: "River Water Fall Visit" },
  { name: "Floating Breakfast" },
];

export default function ThingsToDo() {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl text-[#a07b37] font-raleway tracking-widest">
            THINGS TO DO
          </h2>
          <p className="mt-4 text-gray-600 font-sans">
            Discover Your Paradise: Dive into a world of excitement and serenity
            with our captivating array of activities. From thrilling adventures
            to blissful relaxation, every moment is a treasure waiting to be
            explored at our luxurious hotel and resort.
          </p>
          <button className="mt-6 px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#be9343] hover:bg-[#765b28]">
            EXPLORE ALL
          </button>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {thingsToDo.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-[#be9343] rounded-lg"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900  font-sans">
                  {item.name}
                </h3>
                {/* <p className="mt-2 text-sm text-gray-600">{item.distance}</p> */}
              </div>
              <FaArrowRight className="text-[#be9343]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
