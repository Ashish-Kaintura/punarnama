import { FaArrowRight } from "react-icons/fa";

const thingsToDo = [
  { name: "Forest Research Institute", distance: "5.94 MILES AWAY" },
  {
    name: "Dehradun Local Shopping - Tibetan Market",
    distance: "5.37 MILES AWAY",
  },
  { name: "Camp Hyatt", distance: "0.07 MILES AWAY" },
  { name: "Sahasradhara", distance: "2.8 MILES AWAY" },
];

export default function ThingsToDo() {
  return (
    <div className="flex justify-center py-10">
      <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className=" text-2xl text-[#a07b37]  font-raleway tracking-widest">
            THINGS TO DO
          </h2>
          <p className="mt-4 text-gray-600 font-sans">
             Dehradun Resort and Spa is the destination for local
            immersive experiences, including local food trails, cultural sights
            and shopping at the Tibetan Market. We offer curated itineraries
            full of on-site activities year-round, including the spa, salon,
            Camp Hyatt and StayFit Studio.
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
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.distance}</p>
              </div>
              <FaArrowRight className="text-[#be9343]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
