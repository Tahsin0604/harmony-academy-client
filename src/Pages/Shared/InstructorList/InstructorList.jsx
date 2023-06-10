import { Link, useLocation } from "react-router-dom";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../../components/InstructorCard";

const InstructorList = () => {
  const location = useLocation();
  const pathName = location.pathname;
  let limit = 6;
  if (pathName !== "/") {
    limit = 12;
  }
  const showPaging = pathName !== "/";
  const [instructors, , loading] = useInstructors({ limit: limit, page: 0 });

  if (loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10"></progress>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {instructors.map((item) => (
          <InstructorCard key={item._id} item={item}></InstructorCard>
        ))}
      </div>
      {!showPaging && (
        <div className="mt-14 flex justify-center">
          <Link
            to="instructors"
            className="custom-button px-4 py-2 rounded-lg border-solid border-slate-900 dark:border-slate-50"
          >
            Show More
          </Link>
        </div>
      )}
    </>
  );
};

export default InstructorList;
