import "../assets/styles/skill.styles.css";
import ReactLogo from "../assets/images/react.svg";
import AirplaneTickets from "../assets/images/airplane-tickets.webp";
import WavyLaptop from "../assets/images/wavy-laptop.webp";
import { motion, Variants } from "framer-motion";

const SkillSection = () => {

  const sliderVariants: Variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-200%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 6,
      },
    },
  };

  return (
    <section id="skill">
      <div className="skill-section">
        <div className="skill-images">
          <div className="frontend-developer-bubble">
            <span className="highlight">Frontend</span> Developer
          </div>
          <div className="overlap-images-container">
            <img className="airplane-tickets" src={AirplaneTickets} alt="Airplane with Tickets Illustration"/>
            <img className="wavy-laptop" src={WavyLaptop} alt="Laptop Illustration" />
          </div>
          <img className="react-logo" src={ReactLogo} alt="React Logo"/>
        </div>
        <div className="skill-description">
          <div className="web-developer-bubble">
            <span className="web-highlight">Fullstack</span> Developer
          </div>
          <h3>3+ years experience</h3>
          <h4 className="skill-text">Frontend: React, Javascript, Typescript, CSS</h4>
          {/* add node.js later */}
          <h4 className="skill-text">Backend: Laravel, PHP, PostgreSQL</h4>
          {/* add openapi later */}
          <h4 className="skill-text">Other: Git, Docker</h4>
        </div>
        <motion.div
          className="sliding-text-container"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Reliable Cooking Kind Tennis
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
