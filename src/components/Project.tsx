import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "../data/projects";
import { useRef } from "react";
import SkillList from "./ui/SkillList";
interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-220, 220]
  );

  return (
    <section>
      <div className="container">
        <img ref={ref} src={project.image} alt={project.title + " image"} />
        <motion.div className="text-container" style={{ y: y }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <SkillList list={project.skills} />
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button style={{ fontWeight: 800, width: "100%" }}>View Project</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
