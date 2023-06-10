import InstructorList from "../Shared/InstructorList/InstructorList";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";

const Instructors = () => {
  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Container>
        <div className="text-center">
          <SectionTitle
            title="Our Instructor"
            color={true}
            position="right"
          ></SectionTitle>
        </div>
        <div className="px-6">
          <InstructorList></InstructorList>
        </div>
      </Container>
    </div>
  );
};

export default Instructors;
