import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OurTeam = () => {
  return (
    <div className="w-full min-h-screen bg-slate-500 flex flex-col items-center py-24">
      <h2 className="text-white text-3xl font-bold mb-8">Meet Our Team</h2>

      <div className="w-11/12 lg:w-3/4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={40} // Increased spacing between slides
          pagination={{ clickable: true }}
          breakpoints={{
            340: { 
              slidesPerView: 1, // One slide per view on small screens
              centeredSlides: true, // Center the slide
            },
            540: { 
              slidesPerView: 2, // One slide per view on medium screens
              centeredSlides: true, // Center the slide
            },
            768: { slidesPerView: 2 }, // Medium screens
            1180: { slidesPerView: 3 }, // Large screens
          }}
        >
          <SwiperSlide>
            <div className="slide1 cursor-grab select-none flex items-center justify-center bg-green-300 w-full sm:w-[200px] h-[215px] rounded-xl shadow-lg">
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 cursor-grab select-none flex items-center justify-center bg-blue-400 w-full sm:w-[300px] h-[520px] rounded-xl shadow-lg">
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 cursor-grab select-none flex items-center justify-center bg-yellow-500 w-full sm:w-[300px] h-[520px] rounded-xl shadow-lg">
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide4 cursor-grab select-none flex items-center justify-center bg-red-600 w-full sm:w-[300px] h-[520px] rounded-xl shadow-lg">
              Slide 4
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OurTeam;
