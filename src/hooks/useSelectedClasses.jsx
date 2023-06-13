import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClasses = () => {
  const { user, loading } = useAuth();
  const [secure] = useAxiosSecure();
  const {
    data: selectedClasses = [],
    refetch,
    isLoading: classLoading,
  } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(`/selectedClasses?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch, classLoading];
};

export default useSelectedClasses;
