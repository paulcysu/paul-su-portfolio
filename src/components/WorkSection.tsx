import { motion } from "framer-motion";
import { projects } from "../data/projects";

import "../assets/styles/work.styles.css";

const WorkSection = () => {
  return (
    <section id="work">
      <h2 className="text-center" style={{paddingTop: "5rem"}}>My Work</h2>

      <div className="projects">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="project-image" src={project.image} alt={project.title} />
            <h4 className="project-title">{project.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
