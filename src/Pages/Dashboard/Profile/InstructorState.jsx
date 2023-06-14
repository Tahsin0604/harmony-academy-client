import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const InstructorState = () => {
  const { user, loading } = useAuth();
  const [secure] = useAxiosSecure();
  const { data: instructor } = useQuery({
    queryKey: ["instructor-statistics", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const result = await secure(
        `/instructor-statistics?email=${user?.email}`
      );
      console.log(result);
      return result.data;
    },
  });
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10 text-slate-800 dark:text-white">
      <div className="text-center lg:text-start flex flex-col lg:flex-row gap-4 px-8 py-4 rounded-md bg-slate-200 dark:bg-slate-900 shadow shadow-emerald-50">
        <div className="border-b lg:border-b-0 lg:border-r border-slate-900 dark:border-white pb-4 lg:pb-0 lg:pr-4">
          <h1 className="text-5xl font-righteous mb-4 text-center">
            {instructor?.totalClasses}
          </h1>
          <p className="text-xl font-pacifico text-center">Total Classes</p>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-base font-archivoNarrow font-semibold">
            Total Approved Classes:
            <span className="ml-1">{instructor?.totalApprovedClasses}</span>
          </h1>
          <h1 className="text-base font-archivoNarrow font-semibold">
            Total Pending Classes:
            <span className="ml-1">{instructor?.totalPendingClasses}</span>
          </h1>
          <h1 className="text-base font-archivoNarrow font-semibold">
            Total Denied Classes:{" "}
            <span className="ml-1">{instructor?.totalDeniedClasses}</span>
          </h1>
        </div>
      </div>
      <div className="text-center px-8 py-4 rounded-md bg-slate-200 dark:bg-slate-900 shadow shadow-emerald-50">
        <h1 className="text-3xl md:text-5xl font-righteous mb-4">
          {instructor?.totalEnrolledStudent}
        </h1>
        <p className="text-lg md:text-xl font-pacifico">
          Total Enrolled Student
        </p>
      </div>
    </div>
  );
};

export default InstructorState;
