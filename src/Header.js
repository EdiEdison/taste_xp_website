import React from "react";
import { useEffect, useState } from "react";
import "./Header.css"

function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
      const handleScroll = () => {
        const sections = ["home", "about", "demo", "contact"];
        let currentSection = "home";
  
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
            currentSection = section;
          }
        });
  
        setActiveSection(currentSection);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <header className="header">
        <div className="logo">
            <img src="/images/logo.png" alt="taste_xp logo" width={200}></img>
        </div>
        <nav className="nav">
            <ul>
            {["home", "about", "demo", "contact"].map((section) => (
                <li key={section}>
                <a
                    href={`#${section}`}
                    className={activeSection === section ? "active" : ""}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
        </>
    );
}

export default Header;