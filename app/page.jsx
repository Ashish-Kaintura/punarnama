// import Image from "next/image";
import Image from "next/image";
import Image2 from "../public/Images/home/bollywood-shooting-1.jpg";
import Celeb from "../public/Images/celebrity/big-imag3.jpg";
import Celeb1 from "../public/Images/celebrity/big-image1.jpg";
import Celeb2 from "../public/Images/celebrity/big-image2.jpg";
import Celeb3 from "../public/Images/celebrity/small-image1.jpg";
import HomeSlider from "@/Components/HomeSlider";
import RoomsAndSuitesSection from "@/Components/RoomsAndSuitesSection";
import Dining from "@/Components/Dining";
import Navbar from "@/Components/Navbar";
import Amenities from "@/Components/Amenities";
import ThingsToDo from "@/Components/ThingsToDo";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" h-[750px] overflow-hidden pt-20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          src="https://videos.hyatt.com/hyatt_regency_dehradun_mast.mp4"
        ></video>
      </div>
      <div>
        <div className="w-full justify-center gap-x-10 sm:flex block items-center py-16 sm:px-0 px-4">
          <div className="sm:hidden flex justify-center sm:w-[650px] sm:h-[550px] h-[450px] ">
            <Image
              className="overflow-hidden w-full h-full object-cover z-0 "
              style={{
                clipPath:
                  "polygon(50% 0%, 70% 29%, 100% 47%, 69% 63%, 51% 100%, 50% 100%, 34% 65%, 34% 64%, 0 49%, 29% 30%)",
              }}
              src={Image2}
            ></Image>
          </div>
          <br />
          <div>
            <h1 className=" text-lg text-[#be9343] font-sans ">
              Wonderful Hotel In The Heart <br /> Of Sublime Region Of
              Uttarakhand
            </h1>
            <br />
            <p className="sm:w-[450px] font-sans">
              “The Punarnava Resort is nestled in the scintillating sublime
              region of Uttarakhand Himalayas in Northern India and exhibits
              harmonic coexistence with nature. Renowned as ‘Devbhumi’,
              Uttarakhand (A land of the Gods), this region is blessed with
              natural beauty, divinity, and spiritual vibrations.”
            </p>
          </div>
          <div className="sm:flex hidden justify-center w-[650px] h-[650px]">
            <Image
              className="overflow-hidden w-full h-full object-cover "
              style={{
                clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              }}
              src={Image2}
            ></Image>
          </div>
        </div>
      </div>

      <HomeSlider />

      <section className=" sm:flex justify-center p-8 sm:py-12 items-center gap-x-8">
        <div>
          <h2 className="text-3xl font-raleway tracking-widest text-[#b99146]">
            Celebrity At Punarnava
          </h2>
          <br />
          <p className="font-sans text-xm w-96">
            Explore our exclusive section on Bollywood celebrities at The
            Punarnava Discover captivating anecdotes and glamorous sightings of
            your favorite stars, creating unforgettable moments in indulgent
            surroundings.
          </p>
        </div>
        <div className="gallery sm:pt-0 pt-8">
          <Image className="img " src={Celeb}></Image>
          <Image className="img " src={Celeb1}></Image>
          <Image className="img " src={Celeb2}></Image>
          <Image className="img " src={Celeb3}></Image>
        </div>
      </section>

      <section>
        <RoomsAndSuitesSection />
      </section>
      <section>
        <Dining />
      </section>
      <section>
        <ThingsToDo/>
      </section>
      <section>
        <Amenities />
      </section>
    </div>
  );
}
