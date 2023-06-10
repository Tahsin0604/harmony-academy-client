import React from "react";
import InstructorList from "../Shared/InstructorList/InstructorList";
import Container from "../../components/Container";

const Instructors = () => {
  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Container>
        <InstructorList></InstructorList>
      </Container>
    </div>
  );
};

export default Instructors;
