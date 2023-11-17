import SkillSection from "../components/SkillSection";
import WorkSection from "../components/WorkSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/ui/NavBar";
import Cursor from "../components/cursor/Cursor";
import HeroSection from "../components/HeroSection";

const Home: React.FC = () => {
  return (
    <div id="home">
      <Cursor />
      <Navbar />
      <HeroSection />
      <SkillSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default Home;
