"use client";
import React, { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Img1 from "../public/Images/Dining/DELRH-P0002-Couple-Toasting-Beyul-Drinks.16x9.webp";
import Img2 from "../public/Images/Dining/DELRH-P0009-Couple-Enjoying-Malt-Bar-Drinks.16x9.webp";
import Img3 from "../public/Images/Dining/DELRH-P0017-Couple-At-Range-Buffet.16x9.webp";
import Img4 from "../public/Images/Dining/DELRH-P0020-Couple-Cocktail-At-Sky-Pool-Bar.16x9.webp";
import Img5 from "../public/Images/Dining/DELRH-P0011-Man-At-Market.16x9.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Sample room data
const rooms = [
  {
    name: "BEYUL",
    image: Img1,
    Des: "lorem loreThe Market is a one-stop shop for all things local. Guests can choose from a range of artisanal retail products sourced directly from local farmers and artisans.",
  },
  {
    name: "The Malt Bar",
    image: Img2,
    Des: "lorem loreThe Market is a one-stop shop for all things local. Guests can choose from a range of artisanal retail products sourced directly from local farmers and artisans.",
  },
  {
    name: "RANGE",
    image: Img3,
    Des: "lorem loreThe Market is a one-stop shop for all things local. Guests can choose from a range of artisanal retail products sourced directly from local farmers and artisans.",
  },
  {
    name: "Sky Pool",
    image: Img4,
    Des: "lorem loreThe Market is a one-stop shop for all things local. Guests can choose from a range of artisanal retail products sourced directly from local farmers and artisans.",
  },
  {
    name: "The Market",
    image: Img5,
    Des: "lorem loreThe Market is a one-stop shop for all things local. Guests can choose from a range of artisanal retail products sourced directly from local farmers and artisans.",
  },
];

export default function Diningswiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    if (swiperRef) {
      swiperRef.params.navigation.prevEl = prevRef.current;
      swiperRef.params.navigation.nextEl = nextRef.current;
      swiperRef.params.pagination.el = paginationRef.current;
      swiperRef.navigation.update();
      swiperRef.pagination.update();
    }
  }, [swiperRef]);

  return (
    <>
      <div className="flex justify-center mt-4 ">
        <h2 className=" font-raleway tracking-widest text-[#be9343] text-2xl text-center">
          {rooms[currentIndex].name}{" "}
        </h2>
      </div>
      <div className="pb-12 pt-0 sm:ps-28 relative">
        <Swiper
          onSwiper={(swiper) => setSwiperRef(swiper)}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={40}
          pagination={{
            el: paginationRef.current,
            type: "fraction",
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop={true}
          speed={2500}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          className=""
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index} className="swiperslide">
              <div className="relative h-96 w-full">
                <Image
                  className="object-cover h-full w-full"
                  src={room.image}
                  alt={room.name}
                  layout="fill"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-1">
          <p className=" font-sans text-gray-800 text-sm sm:w-96 text-start">
            {rooms[currentIndex].Des}{" "}
          </p>
        </div>
        <div className="flex sm:justify-end justify-center items-center pr-12 gap-x-8">
          <button ref={prevRef} className="custom-prev-button">
            <MdOutlineNavigateBefore className="size-8 text-[black] hover:text-[black]" />
          </button>
          <div
            ref={paginationRef}
            className="custom-pagination text-black font-sans"
          ></div>
          <button ref={nextRef} className="custom-next-button">
            <MdOutlineNavigateNext className="size-8 text-[black] hover:text-[black]" />
          </button>
        </div>
      </div>
    </>
  );
}
