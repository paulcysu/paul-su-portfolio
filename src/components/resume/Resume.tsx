import { useState } from "react";
import "./resume.styles.css";
import { ExperienceType } from "../../data/experiences";
import Experience from "./Experience";

type ResumeProps = {
  list: ExperienceType[];
};

const Resume = ({ list }: ResumeProps) => {
  const [expanded, setExpanded] = useState("e1");

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };

  return (
    <div className="experience-container">
      {list.map((experience: ExperienceType) => (
        <Experience
          key={experience.id}
          experience={experience}
          expanded={expanded === experience.id}
          onClick={handleChange}
        />
      ))}
    </div>
  );
};

export default Resume;
