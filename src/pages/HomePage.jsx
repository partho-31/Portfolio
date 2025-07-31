import HeroSection from "../components/heroSec/HeroSection";
import AboutSection from "../components/about/AboutSection";
import EducationSection from "../components/education/EducationSection";
import TechStack from "../components/skill/TechStack";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { useOutletContext } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);

  const { aboutRef, educationRef, techStackRef, projectsRef, contactRef } = useOutletContext();
  return (
    <div>
      
      <HeroSection contactRef={contactRef} />
      <AboutSection aboutRef={aboutRef} />
      <EducationSection educationRef={educationRef} />
      <TechStack techStackRef={techStackRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default HomePage;
