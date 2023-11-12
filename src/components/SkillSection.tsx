import "../assets/styles/skill.styles.css";
import ReactLogo from "../assets/images/react.svg";
import AirplaneTickets from "../assets/images/airplane-tickets.png";
import WavyLaptop from "../assets/images/wavy-laptop.png";

const SkillSection: React.FC = () => {
  return (
    <section id="skill">
      <div className="skill-section">
        <div className="skill-images">
          <div className="frontend-developer-bubble">
            <span className="highlight">Frontend</span> Developer
          </div>
          <div className="overlap-images-container">
            <img className="airplane-tickets" src={AirplaneTickets} />
            <img className="wavy-laptop" src={WavyLaptop} />
          </div>
          <img className="react-logo" src={ReactLogo} />
        </div>
        <div className="skill-description">
          <div className="web-developer-bubble">
            <span className="web-highlight">Fullstack</span> Developer
          </div>
          <h3>3+ years experience</h3>
          <h4 className="skill-text">Frontend: React, Javascript</h4>
          {/* add node.js later */}
          <h4 className="skill-text">Backend: Laravel, PHP, PostgreSQL</h4>
          {/* add openapi later */}
          <h4 className="skill-text">Other: Git, Docker</h4>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
