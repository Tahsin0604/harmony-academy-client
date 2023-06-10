import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import InstructorList from "../../Shared/InstructorList/InstructorList";

const PopularInstructors = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center">
          <SectionTitle
            subTitle="instructors"
            title="Featured Instructors"
            position="right"
            color={true}
          ></SectionTitle>
        </div>
        <div className="px-6">
          <InstructorList></InstructorList>
        </div>
      </Container>
    </div>
  );
};

export default PopularInstructors;
