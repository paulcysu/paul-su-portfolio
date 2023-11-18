import "../assets/styles/experience.styles.css";
import Resume from './resume/Resume';
import { experiences } from "../data/experiences";

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h3 className="experience-title">experience</h3>
      <Resume list={experiences}/>
    </section>
  );
};

export default ExperienceSection