import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard";

const InstructorClassList = ({ classes }) => {
  console.log(classes);
  const [items, setItems] = useState(classes.slice(0, 12));
  const totalClasses = classes.length;
  console.log(totalClasses);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(totalClasses / 12);
  const pageNumbers = [...Array(totalPages).keys()];
  const [pagination, setPagination] = useState(true);
  const paginateClasses = (items, itemsPerPage, currentPage) => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling without smooth animation
    });
    const temporaryItems = paginateClasses(classes, 12, currentPage);
    setItems(temporaryItems);
  }, [currentPage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {items.map((item) => (
          <ClassCard key={item._id} item={item}></ClassCard>
        ))}
      </div>

      {pagination && (
        <div className="text-start mt-8">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className="custom-button py-1 px-2 "
              onClick={() => setCurrentPage(page)}
            >
              {page + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
export default InstructorClassList;
