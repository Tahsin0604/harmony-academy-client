import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosForAllUsers from "./useAxiosForAllUsers";

const useRole = () => {
  const { user, loading } = useAuth();
  const [publicAxios] = useAxiosForAllUsers();
  const { data: role = "", isLoading: roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (user?.email) {
        const res = await publicAxios(
          `https://harmony-academy-server.vercel.app/users/role/${user?.email}`
        );
        return res.data.role;
      } else {
        return "";
      }
    },
  });
  return [role, roleLoading];
};

export default useRole;
