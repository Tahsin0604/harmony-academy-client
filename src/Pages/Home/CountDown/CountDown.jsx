import Container from "../../../components/Container";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const CountDown = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust the threshold as needed
  });
  return (
    <div ref={ref} className="bg-orange-400 py-10">
      <Container>
        {inView ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 text-center divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black dark:divide-slate-50">
            <div className="space-y-2 py-2 lg:py-0">
              <h1 className="text-5xl font-yanoneKaffeesatz tracking-wide text-slate-800 dark:text-white font-extrabold">
                <span>
                  <CountUp start={0} end={130} duration={5} />
                </span>
                <span className="ml-1">+</span>
              </h1>
              <h2 className="text-xl text-slate-700 dark:text-white font-mono">
                Active Students
              </h2>
            </div>

            <div className="space-y-2 py-2 lg:py-0">
              <h1 className="text-5xl font-yanoneKaffeesatz tracking-wide text-slate-800 dark:text-white font-extrabold">
                <span>
                  <CountUp start={0} end={20} duration={5} />
                </span>
                <span className="ml-1 text-4xl tracking-wider">M</span>
              </h1>
              <h2 className="text-xl text-slate-700 dark:text-white font-mono">
                Testimonial
              </h2>
            </div>
            <div className="space-y-2 py-2 lg:py-0">
              <h1 className="text-5xl font-yanoneKaffeesatz tracking-wide text-slate-800 dark:text-white font-extrabold">
                <span>
                  <CountUp start={0} end={12} duration={5} />
                </span>
                <span className="ml-1">+</span>
              </h1>
              <h2 className="text-xl text-slate-700 dark:text-white font-mono">
                Active Instructors
              </h2>
            </div>
            <div className="space-y-2 py-2 lg:py-0">
              <h1 className="text-5xl font-yanoneKaffeesatz tracking-wide text-slate-800 dark:text-white font-extrabold">
                <span>
                  <CountUp start={0} end={18} duration={5} />
                </span>
                <span className="ml-1">+</span>
              </h1>
              <h2 className="text-xl text-slate-700 dark:text-white font-mono">
                Classes
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default CountDown;
