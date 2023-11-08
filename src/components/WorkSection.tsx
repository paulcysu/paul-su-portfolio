import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

import "../assets/styles/work.styles.css";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "professional" | "personal";
  link: string;
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const WorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectsToShow = selectedCategory === "all"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="work">
      <h2>My Work</h2>
      <p>Check out some of my projects below.</p>

      <motion.div
        className="phone"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/images/phone.png"
          alt="Smartphone"
          variants={variants}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="project"
          variants={variants}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={projectsToShow[0].image}
            alt={projectsToShow[0].title}
            variants={variants}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="project-details"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <h3>{projectsToShow[0].title}</h3>
            <p>{projectsToShow[0].description}</p>
            <a href={projectsToShow[0].link}>Learn More</a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="filters">
        <button
          className={selectedCategory === "all" ? "active" : ""}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={selectedCategory === "professional" ? "active" : ""}
          onClick={() => setSelectedCategory("professional")}
        >
          Professional
        </button>
        <button
          className={selectedCategory === "personal" ? "active" : ""}
          onClick={() => setSelectedCategory("personal")}
        >
          Personal
        </button>
      </div>

      <div className="projects">
        {projectsToShow.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-title">{project.title}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
