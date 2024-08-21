"use client"; // This marks the file as a client component
import "./page.css";
import AboutPage from "@/components/AboutPage/AboutPage";
import ContactPage from "@/components/ContactPage/ContactPage";
import EducationPage from "@/components/EducationPage/EducationPage";
import ExperiencePage from "@/components/ExperiencePage/ExperiencePage";
import NavBar from "@/components/NavBar/NavBar";
import ProjectPage from "@/components/ProjectPage/ProjectPage";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    switch (sectionId) {
      case "about":
        if (aboutRef.current) {
          aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "experience":
        if (experienceRef.current) {
          experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "education":
        if (educationRef.current) {
          educationRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "project":
        if (projectRef.current) {
          projectRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "contact":
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }
        break;
      default:
        break;
    }
  };

  return (
    <main className="App">
      <NavBar scrollToSection={scrollToSection} />
      <div ref={aboutRef}>
        <AboutPage />
      </div>
      <div ref={experienceRef}>
        <ExperiencePage />
      </div>
      <div ref={educationRef}>
        <EducationPage />
      </div>
      <div ref={projectRef}>
        <ProjectPage />
      </div>
      <div ref={contactRef}>
        <ContactPage />
      </div>
    </main>
  );
}
