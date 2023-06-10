import Container from "../../components/Container";
import ClassList from "../Shared/ClassList/ClassList";

const Classes = () => {
  return (
    <div className="mt-28 mb-12 min-h-[calc(100vh-380px)]">
      <Container>
        <ClassList></ClassList>
      </Container>
    </div>
  );
};

export default Classes;
