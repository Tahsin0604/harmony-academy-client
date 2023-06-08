import React from "react";

const SectionTitle = ({ subTitle, title, color }) => {
  return (
    <>
      <p className="font-pacifico text-[#fd8129] text-xl tracking-wider mb-4">
        {subTitle}
      </p>
      <h1
        className={`font-yanoneKaffeesatz font-bold text-5xl tracking-widest ${
          color ? "text-slate-900 dark:text-slate-50" : "text-white"
        }`}
      >
        {title}
      </h1>
    </>
  );
};

export default SectionTitle;
