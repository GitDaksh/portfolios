import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <section id="work" className="c-space section-spacing">
      <div className="w-full">
        <Timeline data={experiences} />
      </div>
    </section>
  );
};

export default Experiences;
