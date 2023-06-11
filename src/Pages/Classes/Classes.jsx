import { Helmet } from "react-helmet-async";
import Container from "../../components/Container";
import SectionTitle from "../../components/SectionTitle";
import ClassList from "../Shared/ClassList/ClassList";

const Classes = () => {
  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Helmet>
        <title>Harmony Academy | Classes</title>
      </Helmet>
      <Container>
        <div className="text-center">
          <SectionTitle
            title="Our Classes"
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
