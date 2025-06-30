import HeroSection from "../components/heroSec/HeroSection";
import AboutSection from "../components/about/AboutSection";
import EducationSection from "../components/education/EducationSection";
import TechStack from "../components/skill/TechStack";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import { useOutletContext } from "react-router";

const HomePage = () => {
  const {
    aboutRef,
    educationRef,
    techStackRef,
    projectsRef,
    contactRef,
  } = useOutletContext();
  return (
    <div className=" bg-blue-100">
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
