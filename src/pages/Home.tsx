import SkillSection from "../components/SkillSection";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/ui/NavBar";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";

import "../assets/styles/home.styles.css";
import scrollDown from "../assets/images/lottie-scroll-down.json";

const Home: React.FC = () => {
  return (
    <div id="home">
      <Navbar />
      <div id={"home-section"}>
        {/* <Navbar /> */}
        <h1 className="name">PAUL SU</h1>
        <TypeAnimation
          sequence={[
            "WEB DEVELOPER",
            2000,
            "WEB DEVELOPER: FRONT END",
            2000,
            "WEB DEVELOPER: FULL STACK",
            2000,
            () => {},
          ]}
          wrapper="h4"
          cursor={true}
          repeat={Infinity}
          style={{ textAlign: "center"}}
        />
        <div className="scroll-down-container">
          <div className="scroll-down">
            <Lottie animationData={scrollDown} loop={true} />
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
