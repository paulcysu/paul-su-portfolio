import "../assets/styles/skill.styles.css";
import ReactIcon from "../assets/images/react.svg"
import PhpIcon from "../assets/images/php.svg"
import ReactLogo from "../assets/images/react.svg"
import AirplaneTickets from "../assets/images/airplane-tickets.png"
import WavyLaptop from "../assets/images/wavy-laptop.png"

const skills = [
  {
    title: 'Front End',
    icon: ReactIcon,
    alt: "React Logo",
    description: 'React, Typescript',
    experience: '3+ years of experience',
    color: 'green',
    iconColor: '#61DBFB'
  },
  {
    title: 'Full Stack',
    icon: PhpIcon,
    alt: "PHP Logo",
    description: 'Laravel, PostgreSQL',
    experience: '2+ years of experience',
    color: 'yellow',
    iconColor: '#787cb5'
  }
]

const SkillSection = () => {
  return (
    <section id="skill">
      <div className="skill-images">
        <div className="frontend-developer-bubble"><span className="highlight">Frontend</span> Developer</div>
        <div className="overlap-images-container">
          <img className="airplane-tickets" src={AirplaneTickets} />
          <img className="wavy-laptop" src={WavyLaptop} />
        </div>
        <img className="react-logo" src={ReactLogo} />
      </div>
      <div className="skill-description">
        text
      </div>
    </section>
  );
};

export default SkillSection;
