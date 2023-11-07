import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../../assets/styles/nav-bar.styles.css";

const hoverClass: string = "nav-link";
const notHoverClass: string = "nav-link not-hover";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hover, setHover] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    const homeSection = document.getElementById("home-section");
    if (homeSection) {
      const { bottom } = homeSection.getBoundingClientRect();
      setIsSticky(bottom - 200 < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (link: string): string => {
    if (hover === null) return hoverClass;
    return hover === link ? hoverClass : notHoverClass;
  }
  
  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`} onMouseLeave={() => setHover(null)}>
      <div className="navbar-container">
        <Link
          className={getLinkClassName("home")}
          to="home"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHover("home")}
        >
          home
        </Link>
        <Link
          className={getLinkClassName("skill")}
          to="skill"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHover("skill")}
        >
          skill
        </Link>
        <Link
          className={getLinkClassName("work")}
          to="work"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHover("work")}
        >
          work
        </Link>
        <Link
          className={getLinkClassName("experience")}
          to="experience"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHover("experience")}
        >
          experience
        </Link>
        <Link
          className={getLinkClassName("contact")}
          to="contact"
          smooth={true}
          duration={500}
          onMouseEnter={() => setHover("contact")}
        >
          contact
        </Link>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={isMobile ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
      {isMobile && (
        <div className="mobile-menu">
          <Link
            className={hover === "home" ? hoverClass : notHoverClass}
            to="home"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            className={hover === "home" ? hoverClass : notHoverClass}
            to="skill"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Skill
          </Link>
          <Link
            className={hover === "home" ? hoverClass : notHoverClass}
            to="work"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Work
          </Link>
          <Link
            className={hover === "home" ? hoverClass : notHoverClass}
            to="experience"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Experience
          </Link>
          <Link
            className={hover === "home" ? hoverClass : notHoverClass}
            to="contact"
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};


export default NavBar;
