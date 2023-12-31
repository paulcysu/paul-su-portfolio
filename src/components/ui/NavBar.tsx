import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMultiply } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/nav-bar.styles.css";

const hoverClass: string = "nav-link";
const notHoverClass: string = "nav-link not-hover";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hover, setHover] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    const homeSection = document.getElementById("home-section");
    if (homeSection) {
      const { bottom } = homeSection.getBoundingClientRect();
      setIsSticky(bottom - 300 < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (link: string): string => {
    if (!hover) return hoverClass;
    return hover === link ? hoverClass : notHoverClass;
  };

  const onLinkClick = () => {
    if (isMobile) {
      toggleMobileMenu();
    }
  }

  return (
    <>
      <nav
        className={`navbar ${isSticky ? "sticky show" : ""}`}
        onMouseLeave={() => setHover("")}
      >
        <div className={`navbar-container ${isMobile ? 'open-nav' : ''}`}>
          <Link
            className={getLinkClassName("home")}
            to="home"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("home")}
            onClick={onLinkClick}
            rel="nofollow"
            href="#home"
          >
            home
          </Link>
          <Link
            className={getLinkClassName("skill")}
            to="skill"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("skill")}
            onClick={onLinkClick}
            rel="nofollow"
            href="#skill"
          >
            skill
          </Link>
          <Link
            className={getLinkClassName("work")}
            to="work"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("work")}
            onClick={onLinkClick}
            rel="nofollow"
            href="#work"
          >
            work
          </Link>
          <Link
            className={getLinkClassName("experience")}
            to="experience"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("experience")}
            onClick={onLinkClick}
            rel="nofollow"
            href="#experience"
          >
            experience
          </Link>
          <Link
            className={getLinkClassName("contact") + " web-highlight"}
            to="contact"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("contact")}
            onClick={onLinkClick}
            rel="nofollow"
            href="#contact"
          >
            contact
          </Link>
        </div>
        <FontAwesomeIcon
          icon={isMobile ? faMultiply : faBars}
          className="hamburger"
          onClick={toggleMobileMenu}
        />
      </nav>
    </>
  );
};

export default NavBar;
