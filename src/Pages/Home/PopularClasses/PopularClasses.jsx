import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  const classes = useClasses({ limit: 6, page: 0 });
  console.log(classes);
  return <div></div>;
};

export default PopularClasses;
