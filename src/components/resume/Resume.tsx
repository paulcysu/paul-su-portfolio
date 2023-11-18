import * as React from "react";
import "./resume.styles.css";
import { ExperienceType } from "../../data/experiences";
import Experience from "./Experience";
import { v4 as uuidv4 } from 'uuid';

const Resume: React.FC<{ list: ExperienceType[] }> = ({ list }) => {
  const [expanded, setExpanded] = React.useState<string | false>("e1");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="experience-container">
      {list.map((experience) => (
        <Experience
          key={uuidv4()}
          experience={experience}
          expanded={expanded === experience.id}
          onClick={handleChange}
        />
      ))}
    </div>
  );
};

export default Resume;
