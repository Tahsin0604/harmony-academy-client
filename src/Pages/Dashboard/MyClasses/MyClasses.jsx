import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const MyClasses = () => {
  const [secure] = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: classList = [],
    isLoading: classLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-classes", user?.email],
    queryFn: async () => {
      const res = await secure(`/my-classes/${user?.email}`);
      console.log(res);
      return res.data;
    },
  });
  return <div>MyClasses</div>;
};

export default MyClasses;
