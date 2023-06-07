import useAosInit from "../../../hooks/useAosInit";

const Home = () => {
  useAosInit();
  return (
    <div>
      <div className="h-screen">section 1</div>
      <div className="h-screen">section 2</div>
      <div className="h-screen">section 3</div>
    </div>
  );
};

export default Home;
