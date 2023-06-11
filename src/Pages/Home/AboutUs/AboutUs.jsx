import React from "react";
import Container from "../../../components/Container";
import aboutImg from "../../../assets/img/AboutUs/aboutUsImg.jpg";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
          <div
            className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow dark:shadow-orange-50"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <img
              src={aboutImg}
              alt=""
              className="w-full h-[400px] transition-transform duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <SectionTitle
              subTitle="about us"
              title="We Are The World’s Most Popular and Influential Music School"
              color={true}
              position="left"
            ></SectionTitle>
            <p
              className="paragraph-section"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="220"
            >
              Welcome to our music school, where we believe in the power of
              music to inspire, educate, and transform lives. We are passionate
              about providing a nurturing and enriching environment for
              individuals
            </p>
            <div
              className="flex"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="240"
            >
              <Link
                to="/courses"
                className="custom-button px-6 py-2 border-solid rounded-lg border-slate-900 dark:border-slate-50"
              >
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
