import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ProjectType } from "../data/projects";
import { useRef } from "react";
interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <section>
      <div className="container">
        <img ref={ref} src={project.image} alt={project.title + " image"} />
        <motion.div className="text-container" style={{ y: y }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button>View Project</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
