import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ProjectType } from "../data/projects";
import { useRef } from "react";
import SkillList from "./ui/SkillList";

const Project = ({ image, title, description, skills, link }: ProjectType) => {
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
        <img ref={ref} src={image} alt={title + " image"} />
        <motion.div className="text-container" style={{ y: y }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <SkillList list={skills} />
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button style={{ fontWeight: 800, width: "100%" }}>
              View Website
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
