import SkillSection from "../components/SkillSection";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/ui/NavBar";
import Lottie from "lottie-react";
import '../assets/styles/home.styles.css';
import scrollDown from '../assets/images/lottie-scroll-down.json'

const Home: React.FC = () => {
  return (
    <div id="home">
      <div className={"home-section"}>
        <Navbar />
        <h1 className="name">PAUL SU</h1>
        <h4 className="titles">WEB DEVELOPER: FRONT END & FULL STACK</h4>
        <div className="scroll-down-container">
          <div className="scroll-down">
            <Lottie animationData={scrollDown} loop={true}/>
          </div>
        </div>
      </div>
      <SkillSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
