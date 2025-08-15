import React, { useRef, useState, useEffect } from "react";
import Nav from "./components/Nav";
import Start from "./pages/Start";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursor from "./components/Cursor";

function App() {
  const startRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("start");

  // Detect which section is in viewport
  useEffect(() => {
    const sections = [
      { ref: startRef, id: "start" },
      { ref: projectsRef, id: "projects" },
      { ref: aboutRef, id: "about" },
      { ref: contactRef, id: "contact" },
    ];

    const handleScroll = () => {
      sections.forEach(({ ref, id }) => {
        if (!ref.current) return;
        const top = ref.current.getBoundingClientRect().top;
        if (top >= 0 && top < window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Cursor/>
      <Nav activeSection={activeSection} />
      <div ref={startRef}><Start /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
    </>
  );
}

export default App;
