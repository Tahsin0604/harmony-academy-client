import useAosInit from "../../../hooks/useAosInit";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CountDown from "../CountDown/CountDown";
import JoinUs from "../JoinUs/JoinUs";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  useAosInit();
  return (
    <div className="overflow-hidden">
      <Banner></Banner>
      <div data-aos="fade-up" data-aos-duration="1000">
        <AboutUs></AboutUs>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <CountDown></CountDown>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <PopularClasses></PopularClasses>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <PopularInstructors></PopularInstructors>
      </div>

      <div data-aos="fade-up" data-aos-duration="1000">
        <Testimonial></Testimonial>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="mt-48">
        <JoinUs></JoinUs>
      </div>
    </div>
  );
};

export default Home;
