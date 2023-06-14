import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle";
import { FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const [secure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: classList = [], isLoading: classLoading } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(`/my-classes/${user?.email}`);
      return res.data;
    },
  });
  if (classLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Helmet>
        <title>Harmony Academy | Dashboard | My Classes</title>
      </Helmet>
      <SectionTitle
        subTitle="explore"
        title="my Classes"
        color={true}
        position="right"
      ></SectionTitle>

      <div className="overflow-x-auto  p-8 mt-4 bg-white dark:bg-slate-800 border rounded-sm  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-slate-900 dark:text-white">
              <th></th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled Students</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {classList.map((item, index) => (
              <tr
                key={item._id}
                className="text-slate-900 dark:text-white font-archivoNarrow text-base"
              >
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.className}</td>
                <td
                  className={`${
                    item.status === "approved"
                      ? "text-green-500"
                      : item.status === "denied"
                      ? "text-red-500"
                      : "text-orange-500"
                  }`}
                >
                  {item.status}
                </td>
                <td>{item.EnrolledStudents}</td>
                <td>{item.feedback}</td>
                <td>
                  <div className="flex items-center">
                    <Link
                      to={`/dashboard/editClass/${item._id}`}
                      className="bg-red-500 p-2 rounded hover:bg-red-600 text-white"
                    >
                      <FaPen></FaPen>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
