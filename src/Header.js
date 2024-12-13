import "./Header.css"
import { useState, useEffect } from 'react';


function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle the mobile menu

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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false); // Close the menu when "X" button is clicked
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="/images/logo.png" alt="taste_xp logo" width={200} />
                </div>
                <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
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
                    <div className="close-btn" onClick={closeMobileMenu}>
                        &times; {/* "X" icon */}
                    </div>
                </nav>
                <div className="hamburger" onClick={toggleMobileMenu}>
                    &#9776;
                </div>
            </header>
        </>
    );
}

export default Header;