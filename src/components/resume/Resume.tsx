import * as React from "react";
import "./resume.styles.css";
import { ExperienceType } from "../../data/experiences";
import Experience from "./Experience";


const Resume: React.FC<{ list: ExperienceType[] }> = ({ list }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="experience-container">
      {list.map((experience, index) => (
        <Experience
          key={index}
          experience={experience}
          expanded={expanded === experience.id}
          onClick={handleChange}
        />
      ))}
    </div>
  );
};

export default Resume;
