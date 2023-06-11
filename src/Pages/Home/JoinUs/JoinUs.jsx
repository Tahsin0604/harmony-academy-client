import React from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

import image1 from "../../../assets/img/JoinUs/join1.jpg";
import image2 from "../../../assets/img/JoinUs/join2.jpeg";
import image3 from "../../../assets/img/JoinUs/join3.jpeg";

const JoinUs = () => {
  return (
    <div className="py-16" id="join-us">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2">
            <SectionTitle
              subTitle="join our class"
              title="Learn The Music From The Core & Become Mastery"
              color={true}
              position="right"
            ></SectionTitle>
            <p
              className="paragraph-section"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="250"
            >
              Join a diverse group of music enthusiasts, learn from industry
              professionals, and ignite your musical potential.
            </p>

            <div
              className="flex justify-start"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="270"
            >
              <Link
                to="/classes"
                className="custom-button rounded-lg px-6 py-2 border-solid border-slate-900 dark:border-slate-50"
              >
                Explore Us
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-between items-center gap-3">
            <div className="w-7/12">
              <img
                src={image1}
                alt=""
                className="w-full rounded-lg"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="200"
              />
            </div>

            <div className="w-5/12 space-y-4">
              <img
                src={image2}
                alt=""
                className="w-11/12 rounded-lg"
                data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-delay="250"
              />
              <img
                src={image3}
                alt=""
                className="rounded-lg"
                data-aos="fade-left"
                data-aos-duration="1700"
                data-aos-delay="300"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
