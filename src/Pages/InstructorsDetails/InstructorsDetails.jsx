import React from "react";
import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container";
import InstructorClassList from "../Shared/InstructorList/InstructorClassList";

const InstructorsDetails = () => {
  const [instructor] = useLoaderData();
  const { email, image, name, totalClasses, totalStudents, classes } =
    instructor;

  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6  lg:items-center">
          <div>
            <img
              src={image}
              alt="Instructor Image"
              className="w-44 h-44 rounded-full"
            />
          </div>
          <div className="">
            <h1 className="text-slate-500 dark:text-white text-xl mb-1">
              Instructor
            </h1>
            <h1 className="capitalize text-5xl font-yanoneKaffeesatz ">
              {name}
            </h1>
            <p className=" text-lg font-yanoneKaffeesatz ">{email}</p>
            <h1 className="capitalize text-slate-500 dark:text-white text-xl mt-4 mb-1 ">
              total Student
            </h1>
            <h1 className="capitalize text-5xl font-sans ">{totalStudents}</h1>
          </div>
        </div>
        <h1 className="mt-8 capitalize text-2xl font-yanoneKaffeesatz -mb-6 font-semibold">
          Courses({totalClasses})
        </h1>
        <InstructorClassList classes={classes}></InstructorClassList>
      </Container>
    </div>
  );
};

export default InstructorsDetails;
