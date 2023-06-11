import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const [secure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const res = await secure(`/users/role/${user?.email}`);
      return res.data;
    },
  });
  return [role, roleLoading];
};

export default useRole;
