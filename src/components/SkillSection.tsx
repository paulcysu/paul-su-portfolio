import "../assets/styles/skill.styles.css";
import ReactIcon from "../assets/images/react.svg"
import PhpIcon from "../assets/images/php.svg"

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
    <div id="skill">
      <h2 className={"text-center"}>Skills</h2>
      <div className={"skills-container"}>
        {skills.map((skill, index) => (
          <div className="skill" key={'skill-' + index}>
            <div className="skill-title-container">
              <img src={skill.icon} alt={skill.alt} className="icon" style={{color: skill.iconColor}} />
              <div>
                <h3 className={"skill-title"}>{skill.title}</h3>
                <h3 className="skill-description">{skill.description}</h3>
              </div>
            </div>
            <div className="skill-content">
              <p className="skill-experience">{skill.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
