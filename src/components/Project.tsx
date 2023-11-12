import { motion } from "framer-motion";
import { ProjectType } from "../data/projects";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <section>
      <motion.div
        key={project.id}
        className="project-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img className="project-image" src={project.image} alt={project.title} />
        <h4 className="project-title">{project.title}</h4>
      </motion.div>
    </section>
  );
};

export default Project;
