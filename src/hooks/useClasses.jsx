import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClasses = ({ limit, page }) => {
  const {
    data: classes = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["classes", limit, page],
    queryFn: async () => {
      const res = await axios.get(
        `https://harmony-academy-server.vercel.app/classes?limit=${limit}&page=${page}`
      );
      return res.data;
    },
  });

  return [classes, refetch, loading];
};

export default useClasses;

/*
 refetch({ page: 1 }); possible
*/
