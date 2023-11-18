import { useState } from "react";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
import scrollDown from "../assets/images/lottie-scroll-down.json";
import "../assets/styles/hero.styles.css";

const HeroSection = () => {
  const [textColor, setTextColor] = useState("black");

  return (
    <section id={"home-section"}>
      <h1 className="name">PAUL SU</h1>
      <h4 className="title" style={{ marginBottom: 0}}>WEB DEVELOPER</h4>
      <h4 style={{ color: textColor, marginTop: 10 }}>
        <TypeAnimation
          sequence={[
            () => setTextColor("red"),
            "FRONT END",
            2000,
            () => setTextColor("yellow"),
            "FULL STACK",
            2000,
          ]}
          cursor={true}
          repeat={Infinity}
        />
      </h4>
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
