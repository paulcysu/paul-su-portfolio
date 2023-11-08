import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import "../../assets/styles/nav-bar.styles.css";

const hoverClass: string = "nav-link";
const notHoverClass: string = "nav-link not-hover";

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hover, setHover] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isStickyShow, setIsStickyShow] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleScroll = () => {
    const homeSection = document.getElementById("home-section");
    if (homeSection) {
      const { bottom } = homeSection.getBoundingClientRect();
      setIsSticky(bottom - 300 < 0);
      setIsStickyShow(bottom - 200 < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClassName = (link: string): string => {
    if (hover === null) return hoverClass;
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
        className={`navbar ${isSticky ? "sticky" : ""} ${
          isStickyShow ? "show" : ""
        }`}
        onMouseLeave={() => setHover(null)}
      >
        <div className={`navbar-container ${isMobile ? 'open-nav' : ''}`}>
          <Link
            className={getLinkClassName("home")}
            to="home"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("home")}
            onClick={onLinkClick}
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
          >
            experience
          </Link>
          <Link
            className={getLinkClassName("contact")}
            to="contact"
            smooth={true}
            duration={500}
            onMouseEnter={() => setHover("contact")}
            onClick={onLinkClick}
          >
            contact
          </Link>
        </div>
        <FontAwesomeIcon
          icon={isMobile ? faChampagneGlasses : faHamburger}
          className="hamburger"
          onClick={toggleMobileMenu}
        />
      </nav>
    </>
  );
};

export default NavBar;
