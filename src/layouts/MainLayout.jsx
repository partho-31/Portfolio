import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { useRef } from "react";
import ScrollToTop from "./ScrollToTop";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from "framer-motion";
import AnimatedCubeBackground from "../components/background/AnimatedCubBackground";

const MainLayout = () => {
  const heroSecRef = useRef(null)
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const techStackRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll();
  return (
    <>
      <AnimatedCubeBackground />

      <Navbar
        onHeroSecClick={()=>scrollToSection(heroSecRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onTechStackClick={() => scrollToSection(techStackRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 64,
          left: 0,
          right: 0,
          height: "3px",
          transformOrigin: "left",
          backgroundColor: "#2563eb",
          zIndex: 40,
        }}
      />
      <Outlet
        context={{
          heroSecRef,
          aboutRef,
          educationRef,
          techStackRef,
          projectsRef,
          contactRef,
        }}
      />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default MainLayout;
