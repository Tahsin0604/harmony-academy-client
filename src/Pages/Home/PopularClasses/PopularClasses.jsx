import Container from "../../../components/Container";
import SectionTitle from "../../../components/SectionTitle";
import ClassList from "../../Shared/ClassList/ClassList";

const PopularClasses = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="text-center">
          <SectionTitle
            subTitle="classes"
            title="Our Most popular Classes"
            position="right"
            color={true}
          ></SectionTitle>
        </div>
        <ClassList></ClassList>
      </Container>
    </div>
  );
};

export default PopularClasses;
