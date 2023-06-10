import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/classes?limit=6&page=0")
      .then((res) => console.log(res));
  }, []);
  return <div></div>;
};

export default PopularClasses;
