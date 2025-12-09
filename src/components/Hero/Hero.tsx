import "./hero.css";
import SocialBar from "../SocialBar/SocialBar";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import jacobImage from "../../assets/jacob.png";

function Hero() {
  return (
    <div className="hero-section">
      <img src={jacobImage} alt="Jacob Halvorson" className="profile-image" />
      <h1>Jacob Halvorson</h1>
      <p className="intro-text" style={{ marginBottom: "2rem" }}>
        I'm a full-stack software engineer with 5+ years of experience building
        enterprise applications. I enjoy turning complex problems into simple,
        well-designed systems with a deep focus on clean and reliable code.
      </p>
      <SocialBar />
      <AnimatedButton to="/about" style={{ marginTop: "3rem" }}>
        About Me
      </AnimatedButton>
    </div>
  );
}

export default Hero;
