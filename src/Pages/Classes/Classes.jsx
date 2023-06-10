import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ClassList from "../Shared/ClassList/ClassList";

const Classes = () => {
  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Container>
        <div className="text-center">
          <SectionTitle
            title="Our Courses"
            color={true}
            position="right"
          ></SectionTitle>
        </div>
        <div className="px-6">
          <ClassList></ClassList>
        </div>
      </Container>
    </div>
  );
};

export default Classes;
