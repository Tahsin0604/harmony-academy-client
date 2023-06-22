import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

import useAxiosForAllUsers from "./useAxiosForAllUsers";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  const [publicAxios] = useAxiosForAllUsers();
  const {
    data: selectedClasses = [],
    refetch,
    isLoading: classLoading,
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await publicAxios(`/selectedClasses?email=${user?.email}`);
        return res.data;
      } else {
        return [];
      }
    },
  });
  return [selectedClasses, refetch, classLoading];
};

export default useSelectedClasses;
