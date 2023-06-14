import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Container from "../../../components/Container";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://harmony-academy-server.vercel.app/reviews")
      .then((res) => {
        setReviews(res.data);
      });
  }, []);
  return (
    <div className="testimonial">
      <Container>
        <div className="text-center pt-10">
          <SectionTitle
            subTitle="testimonial"
            title="What Our Students Say"
            position="right"
          />
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              860: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="reviews-slide  relative -bottom-60 -mt-36"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="flex flex-col justify-center items-center py-8 bg-white dark:bg-gray-600  rounded-lg h-[370px] shadow-lg mb-16 px-4 relative">
                  <p className="text-slate-800 dark:text-white font-caveat text-xl font-semibold tracking-wider">
                    {review.review}
                  </p>
                  <div className=" mt-6 flex gap-4 items-center">
                    <img
                      src={review.userImage}
                      alt=""
                      className="w-20 h-20 rounded-full mx-auto"
                    />
                    <div className="text-start">
                      <h5 className="text-slate-900 dark:text-white font-semibold font-archivoNarrow">
                        {review.userName}
                      </h5>
                      <h5 className="text-slate-700 dark:text-white font-normal font-archivoNarrow">
                        {review.location}
                      </h5>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 ">
                    <FaQuoteLeft className="text-5xl opacity-20"></FaQuoteLeft>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
