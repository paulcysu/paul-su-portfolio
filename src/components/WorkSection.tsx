import { projects, ProjectType } from "../data/projects";
import Project from "./Project";
import { motion, useScroll, useSpring } from "framer-motion";

import "../assets/styles/work.styles.css";
import { useRef } from "react";

const WorkSection = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div id="work" ref={workRef}>
      <div className="progress">
        <h3 className="work-title">work</h3>
        <motion.div
          className="progress-bar"
          style={{ scaleX }}
          initial={{ scaleX: 0 }}
        ></motion.div>
      </div>
      {projects.map((project: ProjectType) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default WorkSection;
