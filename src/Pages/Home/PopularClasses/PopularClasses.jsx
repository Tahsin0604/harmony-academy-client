import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ClassList from "../../Shared/ClassList/ClassList";

const PopularClasses = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center">
          <SectionTitle
            subTitle="courses"
            title="Our Most popular Courses"
            position="right"
            color={true}
          ></SectionTitle>
        </div>
        <div className="px-6">
          <ClassList></ClassList>
        </div>
      </Container>
    </div>
  );
};

export default PopularClasses;
