import useAosInit from "../../../hooks/useAosInit";
import Banner from "../Banner/Banner";

const Home = () => {
  useAosInit();
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
    </div>
  );
};

export default Home;
