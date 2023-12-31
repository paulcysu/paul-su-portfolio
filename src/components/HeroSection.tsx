import { useState } from "react";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import scrollDown from "../assets/images/lottie-scroll-down.json";
import "../assets/styles/hero.styles.css";

const HeroSection = () => {
  const [textColor, setTextColor] = useState("black");

  const name: string = "PAUL SU";
  const title: string = "WEB DEVELOPER";

  return (
    <section id={"home-section"}>
      <h1 className="name">{name}</h1>
      <p className="title h4" style={{ marginBottom: 0 }}>
        {title}
      </p>
      <p className="title h4" style={{ 
        color: textColor, 
        marginTop: 10,
        background: textColor === "springgreen" ? "black" : "",
        padding: 10,
      }}>
        <TypeAnimation
          sequence={[
            () => setTextColor("red"),
            "FRONT END",
            1500,
            () => setTextColor("springgreen"),
            "FULL STACK",
            2000,
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </p>
      <div className="scroll-down-container">
        <div className="scroll-down">
          <Lottie
            animationData={scrollDown}
            loop={true}
            style={{ height: "80px", marginBottom: "3rem" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
