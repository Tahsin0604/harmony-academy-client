import React from "react";
import useAosInit from "../hooks/useAosInit";

const SectionTitle = ({ subTitle, title, color, position }) => {
  useAosInit();
  return (
    <>
      <p
        className="font-pacifico text-[#fd8129] text-xl tracking-wider mb-4"
        data-aos={`fade-${position}`}
        data-aos-duration="1500"
        data-aos-delay="200"
      >
        {subTitle}
      </p>
      <h1
        className={`font-yanoneKaffeesatz font-bold text-5xl tracking-widest capitalize ${
          color ? "text-slate-900 dark:text-slate-50" : "text-white"
        }`}
        data-aos={`fade-${position}`}
        data-aos-duration="1500"
        data-aos-delay="220"
      >
        {title}
      </h1>
    </>
  );
};

export default SectionTitle;
