import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useInstructors = ({ limit, page }) => {
  const {
    data: instructors = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["instructors", limit, page],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/instructors?limit=${limit}&page=${page}`
      );
      return res.data;
    },
  });
  return [instructors, refetch, loading];
};

export default useInstructors;

/*
 refetch({ page: 1 }); possible
*/
