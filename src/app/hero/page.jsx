"use client"; // important for client-side carousel

import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Heropage() {
  const banners = [
    "/image/colleagues-using-laptops-notebooks-learning-study-session.jpg",
    "/image/brainstorm-meeting.jpg",
    "/image/young-woman-sits-front-laptop-studies-remotely.jpg",
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 1 },
    desktop: { breakpoint: { max: 1536, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full relative">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        showDots={true}
        arrows={false}
        swipeable={true}
        draggable={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {banners.map((banner, idx) => (
          <div
            key={idx}
            class="relative w-full h-[400px] md:h-[700px] overflow-hidden"
          >
            <img
              src={banner}
              class="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* Overlay buttons */}
            <div className="hidden md:flex absolute bottom-12 left-6 gap-3">
              <button className="bg-[#B8E55C] text-black px-5 py-2 text-base rounded-full font-semibold hover:bg-[#a5d14a] transition-all">
                Parcese Course
              </button>

              <button className="w-11 h-11 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition transform hover:-translate-y-0.5">
                <MdOutlineArrowOutward className="w-5 h-5 text-white" />
              </button>

              <button className="border-2 bg-base-100 border-gray-300 text-gray-700 px-6 py-2 text-base rounded-full font-semibold hover:bg-base-200 transition-all">
                For 30% off
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
