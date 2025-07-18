import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { useRef } from "react";
import ScrollToTop from "./ScrollToTop";
import { motion, useScroll } from "framer-motion";
import AnimatedCubeBackground from "../components/background/AnimatedCubBackground";

const MainLayout = () => {
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
        onContactClick={() => scrollToSection(contactRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
        onTechStackClick={() => scrollToSection(techStackRef)}
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
