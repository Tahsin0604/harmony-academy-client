import SectionTitle from "../../../components/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const EnrolledClasses = () => {
  const [secure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: enrolledClasses = [], iseLoading: enrolledLoading } = useQuery({
    queryKey: ["/enrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(`/enrolledClasses?email=${user?.email}`);
      return res.data;
    },
  });
  if (enrolledLoading) {
    return (
      <div className="flex justify-center">
        <progress className="progress w-56  mt-10 dark:bg-white"></progress>
      </div>
    );
  }
  return (
    <div className="w-[calc(100vw-50px)] lg:w-[calc(100vw-420px)]">
      <Helmet>
        <title>{`Harmony Academy | Dashboard | Enrolled classes`}</title>
      </Helmet>
      <SectionTitle
        subTitle="explore"
        title="Enrolled Classes"
        color={true}
        position="right"
      ></SectionTitle>

      <div className="overflow-x-auto  p-8 mt-4 bg-white dark:bg-slate-800 border rounded-sm  ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-slate-900 dark:text-white">
              <th></th>
              <th>Class</th>
              <th>Instructor Name</th>
              <th>Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((item, index) => (
              <tr
                key={item._id}
                className="text-slate-900 dark:text-white font-archivoNarrow text-base"
              >
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>{item.className}</td>
                <td>{item.instructorName}</td>
                <td>{item.paidAmount}</td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
