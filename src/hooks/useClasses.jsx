import axios from "axios";
import { useEffect, useState } from "react";

const useClasses = ({ limit, page }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/classes?limit=${limit}&page=${page}`)
      .then((res) => setClasses(res.data));
  }, []);

  return classes;
};

export default useClasses;
