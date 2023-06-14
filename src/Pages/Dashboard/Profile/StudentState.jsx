import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const StudentState = ({ email }) => {
  const { user, loading } = useAuth();
  const [secure] = useAxiosSecure();
  const { data: student } = useQuery({
    queryKey: ["student-statistics", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const result = await secure(`/student-statistics?email=${user?.email}`);
      console.log(result);
      return result.data;
    },
  });
  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-10 text-slate-800 dark:text-white">
      <div className="text-center px-8 py-4 rounded-md bg-slate-200 dark:bg-slate-900 shadow shadow-emerald-50">
        <h1 className="text-3xl md:text-5xl font-righteous mb-4">
          {student?.selectedClasses}
        </h1>
        <p className="text-lg md:text-xl font-pacifico">Selected Classes</p>
      </div>
      <div className="text-center px-8 py-4 rounded-md bg-slate-200 dark:bg-slate-900 shadow shadow-emerald-50">
        <h1 className="text-3xl md:text-5xl font-righteous mb-4">
          {student?.enrolledClasses}
        </h1>
        <p className="text-lg md:text-xl font-pacifico">EnrolledClasses</p>
      </div>
    </div>
  );
};

export default StudentState;
