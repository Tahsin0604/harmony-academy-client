import useAosInit from "../../../hooks/useAosInit";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  useAosInit();
  return (
    <div className="overflow-x-hidden">
      <Banner></Banner>
      <JoinUs></JoinUs>
      <Testimonial></Testimonial>
      <section className="h-screen"> </section>
    </div>
  );
};

export default Home;
