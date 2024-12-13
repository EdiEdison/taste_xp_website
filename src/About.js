import React from "react";
import "./About.css"
function About() {
    return (
        <section id="about" className="about-section">
            <h2>About TasteXp</h2>
            <p>
                Taste Xp is revolutionizing the way you enjoy drinks during your breaks. 
                Customize your flavors and get a healthy, full-meal drink at your convenience!
            </p>
            <div className="features">
                <div className="feature">
                    <h3>Customizable Drinks</h3>
                    <p>Create your perfect blend with our wide range of flavors and options.</p>
                </div>
                <div className="feature">
                    <h3>Health Benefits</h3>
                    <p>Get the nutrients you need to stay energized and healthy.</p>
                </div>
                <div className="feature">
                    <h3>Convenient</h3>
                    <p>Quick and easy to grab, perfect for your busy schedule.</p>
                </div>
            </div>
        </section>
    );
}

export default About;