import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { useRef } from "react";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const techStackRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar
        onContactClick={() => scrollToSection(contactRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onEducationClick={() => scrollToSection(educationRef)}
        onProjectClick={() => scrollToSection(projectsRef)}
        onTechStackClick={() => scrollToSection(techStackRef)}
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
