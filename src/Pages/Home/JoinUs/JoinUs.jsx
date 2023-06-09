import React from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

import image1 from "../../../assets/img/JoinUs/join1.jpg";
import image2 from "../../../assets/img/JoinUs/join2.jpeg";
import image3 from "../../../assets/img/JoinUs/join3.jpeg";

const JoinUs = () => {
  const stats = [
    { type: "Teaching Ability", level: 90 },
    { type: "Student Satisfaction", level: 80 },
  ];
  console.log(stats);
  return (
    <div className="py-16" id="join-us">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="w-full lg:w-1/2">
            <SectionTitle
              subTitle="join our class"
              title="Learn The Music From The Core & Become Mastery"
              color={true}
            ></SectionTitle>
            <p className="font-archivoNarrow  text-lg my-8">
              Join a diverse group of music enthusiasts, learn from industry
              professionals, and ignite your musical potential.
            </p>

            <div className="flex justify-start">
              <Link
                to="/classes"
                className="custom-button block px-6 py-2 border-solid border-slate-900 dark:border-slate-50"
              >
                Explore Us
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-between items-center gap-3">
            <div className="w-7/12">
              <img src={image1} alt="" className="w-full rounded-lg" />
            </div>

            <div className="w-5/12 space-y-4">
              <img src={image2} alt="" className="w-11/12 rounded-lg" />
              <img src={image3} alt="" className="rounded-lg" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
