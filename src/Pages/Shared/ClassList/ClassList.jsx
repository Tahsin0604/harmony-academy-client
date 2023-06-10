import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../../components/ClassCard";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ClassList = () => {
  const [totalClasses, setTotalClasses] = useState(0);
  useEffect(() => {
    axios("http://localhost:5000/classes-count").then((res) =>
      setTotalClasses(res.data.totalClasses)
    );
  }, []);
  let limit = 6;
  const location = useLocation();
  const pathName = location.pathname;
  const showPaging = pathName !== "/";
  if (pathName !== "/") {
    limit = 12;
  }
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalClasses / limit);
  const pageNumbers = [...Array(totalPages).keys()];
  const [pagination, setPagination] = useState(true);
  const [classes, refetch, loading] = useClasses({
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

  if (loading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  const handlePagination = (page) => {
    setCurrentPage(page);
    refetch({ limit: limit, page: currentPage });
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {classes.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>
      {!showPaging && (
        <div className="mt-14 flex justify-center">
          <Link
            to="classes"
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

export default ClassList;
