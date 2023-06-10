import { Link, useLocation } from "react-router-dom";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../../components/InstructorCard";
import { useEffect, useState } from "react";
import axios from "axios";

const InstructorList = () => {
  const [totalInstructors, setTotalInstructors] = useState(0);
  useEffect(() => {
    axios("http://localhost:5000/instructors-count").then((res) =>
      setTotalInstructors(res.data.totalInstructors)
    );
  }, []);
  const location = useLocation();
  const pathName = location.pathname;
  let limit = 6;
  if (pathName !== "/") {
    limit = 12;
  }
  const showPaging = pathName !== "/";

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalInstructors / limit);
  const pageNumbers = [...Array(totalPages).keys()];
  const [pagination, setPagination] = useState(true);
  const [instructors, refetch, loading] = useInstructors({
    limit: limit,
    page: currentPage,
  });
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
  }, [currentPage]);

  const handlePagination = (page) => {
    setCurrentPage(page);
    refetch({ limit: limit, page: currentPage });
  };

  if (loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 bg-white"></progress>
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
      {showPaging && pagination && (
        <div className="text-start mt-8">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className="custom-button py-1 px-2 "
              onClick={() => handlePagination(page)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default InstructorList;
