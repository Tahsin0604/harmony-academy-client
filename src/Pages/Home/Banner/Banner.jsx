import React, { useEffect } from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import image1 from "../../../assets/img/derick-daily-gx2krs5cGDM-unsplash.jpg";
import image2 from "../../../assets/img/hans-vivek-By96LAr-34o-unsplash.jpg";
import image3 from "../../../assets/img/simon-weisser-phS37wg8cQg-unsplash.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="banner-slide"
      >
        <SwiperSlide className="relative">
          <img src={image1} alt="Image 1" className="w-full h-full" />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-50 text-white flex justify-center items-center">
            <div className="text-center ">
              <h1 className="text-7xl lg:text-9xl font-yanoneKaffeesatz capitalize tracking-wide">
                Music for everyone
              </h1>
              <p className="uppercase text-3xl font-archivoNarrow mt-1">
                Hurry Now
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/classes" className="custom-button block px-6  py-2">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Image 2" className="w-full h-full " />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-50 text-white flex justify-center items-center">
            <div className="text-center ">
              <h1 className="text-7xl lg:text-9xl font-yanoneKaffeesatz capitalize tracking-wide">
                Music is your world
              </h1>
              <p className="uppercase text-3xl font-archivoNarrow mt-1">
                don't miss the chance
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/classes" className="custom-button block px-6  py-2">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Image 3" className="w-full h-full " />
          <div className="absolute inset-0 bg-gray-950 bg-opacity-50 text-white flex justify-center items-center">
            <div className="text-center ">
              <h1 className="text-7xl lg:text-9xl font-yanoneKaffeesatz capitalize tracking-wide">
                Start with a note
              </h1>
              <p className="uppercase text-3xl font-archivoNarrow mt-1">
                Awaken Possibility
              </p>
              <div className="mt-8 flex justify-center">
                <Link to="/classes" className="custom-button block px-6  py-2">
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
