import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const [secure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: role = "student", isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secure(`/users/role/${user?.email}`);
      return res.data.role;
    },
  });
  return [role, roleLoading];
};

export default useRole;
