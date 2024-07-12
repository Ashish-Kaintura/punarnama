import React from "react";

import Diningswiper from "./Diningswiper";

export default function Dining() {
  return (
    <div>
      <div className="px-8 bg-[#be9343] py-12 bg-opacity-80 ">
        <div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-3xl font-extralight font-raleway tracking-widest text-[black]">
                Dining
              </h2>
              <br />
              <p className="sm:w-[450px] font-sans text-sm">
                Punarnava Dehradun Resort and Spa, located on the foothills of
                the Himalayas, features 263 guest accommodations, including 24
                spacious suites and interconnecting and balcony rooms—each
                overlooking the picturesque Malsi Reserved Forest or the
                majestic Himalayan mountains.
              </p>
            </div>
            <div>
            <button className="px-4 py-2 sm:mt-0 mt-4 border-[#eae8e6] text-[#fefcfc] hover:bg-[#be9343] hover:text-white border-2 rounded-sm text-sm font-raleway tracking-widest shadow-xl">
              All Dining
            </button>
          </div>
          </div>
          <Diningswiper />
        </div>
      </div>
    </div>
  );
}
