import React from "react";
import InstructorList from "../Shared/InstructorList/InstructorList";
import Container from "../../components/Container";

const Instructors = () => {
  return (
    <div className="mt-28 mb-12">
      <Container>
        <InstructorList></InstructorList>
      </Container>
    </div>
  );
};

export default Instructors;
