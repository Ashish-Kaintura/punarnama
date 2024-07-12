"use client";
import React, { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Img1 from "@/public/Images/suits/DELRH-P0028-Regency-Suite-Bed-Seating-Area.16x9.webp"
import Img2 from "@/public/Images/suits/DELRH-P0069-Family-Executive-Suite.16x9.webp"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

// Sample room data
const rooms = [
  { name: "REGENCY SUITE", image: Img1 },
  { name: "REGENCY EXECUTIVE SUITE", image: Img2 },
 
];

export default function Suites() {
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
      <div className="py-12 sm:ps-28 relative">
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
          <h2 className=" font-raleway tracking-widest text-[#7b5b20] text-sm" >{rooms[currentIndex].name} </h2>
        </div>
        <div className="flex sm:justify-end justify-center items-center pr-12 gap-x-8">
          <button ref={prevRef} className="custom-prev-button">
            <MdOutlineNavigateBefore className="size-8 text-[#be9343] hover:text-[#987432]" />
          </button>
          <div
            ref={paginationRef}
            className="custom-pagination text-black font-sans"
          ></div>
          <button ref={nextRef} className="custom-next-button">
            <MdOutlineNavigateNext className="size-8 text-[#be9343] hover:text-[#987432]" />
          </button>
        </div>
      </div>
    </>
  );
}
