import React from "react";
import { Link } from "react-router-dom";

const InstructorCard = ({ item }) => {
  const { _id, image, name, totalClasses, totalStudents } = item;
  console.log(item);
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
      <Link to={`/instructors/${_id}`}>
        <div className="rounded-lg bg-base-100 dark:bg-[#0000002f] border-none shadow-md hover:shadow-orange-100 hover:scale-105 transition-transform duration-500 ease-in-out">
          <div className="overflow-hidden rounded-t-lg w-full">
            <img
              src={image}
              alt="Shoes"
              className="h-[280px] w-full rounded-t-lg"
            />
          </div>
          <div className="rounded-b-lg text-slate-800 py-4 px-4">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white tracking-wider font-yanoneKaffeesatz ">
              {name}
            </h2>
            <p className="text-slate-700 dark:text-white text-base font-bold font-archivoNarrow">
              Total Classes : {totalClasses}
            </p>
            <p className="text-slate-700 dark:text-white text-base font-bold font-archivoNarrow">
              Total Students : {totalStudents}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default InstructorCard;
