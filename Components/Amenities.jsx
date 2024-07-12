"use client";
import {
  FaBusinessTime,
  FaConciergeBell,
  FaKey,
  FaDumbbell,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils,
  FaDog,
  FaSpa,
} from "react-icons/fa";
import { MdLocalHotel } from "react-icons/md";
import { MdMeetingRoom,MdRoomService } from "react-icons/md";
import { MdLocalLaundryService } from "react-icons/md";
const amenities = [
  { icon: <FaBusinessTime />, label: "Business Services" },
  { icon: <FaConciergeBell />, label: "Concierge" },
  { icon: <FaKey />, label: "Digital Key" },
  { icon: <FaDumbbell />, label: "Fitness Center" },
  { icon: <FaWifi />, label: "Free Internet Access" },
  { icon: <FaParking />, label: "Free Parking" },
  { icon: <MdMeetingRoom/> , label: 'Meeting Facilities' },
  { icon: <MdLocalLaundryService />, label: 'Laundry' },
  { icon: <FaUtensils />, label: "On-Site Restaurant" },
  { icon: <FaDog />, label: "Pet Friendly" },
  { icon: <FaSwimmingPool />, label: "Pool" },
  { icon: <FaSpa />, label: "Spa" },
  { icon: <MdLocalHotel />, label: "Resort Property" },
  { icon: <MdRoomService />, label: "Room Services" },
];
const Amenities = () => {
  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="font-raleway text-xl tracking-widest text-[#be9343]  uppercase">
              Amenities
            </h2>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {amenities.map((amenity) => (
                <div key={amenity.label} className="relative">
                  <dt className="item center">
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md size-3  text-indigo-500">
                      {amenity.icon}
                    </div>
                    <p className="ml-16 text-xs leading-6 font-medium text-gray-900">
                      {amenity.label}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
