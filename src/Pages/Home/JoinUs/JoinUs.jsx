import React from "react";
import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import { Link } from "react-router-dom";

import image1 from "../../../assets/img/JoinUs/join (1).jpg";
const JoinUs = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <SectionTitle
              subTitle="join our class"
              title="Learn The Music From The Core & Become Mastery"
              color={true}
            ></SectionTitle>
            <p className="font-archivoNarrow  text-lg my-5">
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
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
