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
        `http://localhost:5000/classes?limit=${limit}&page=${page}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  return [classes, refetch, loading];
};

export default useClasses;

/*
 refetch({ page: 1 }); possible
*/
