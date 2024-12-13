import React from "react";
import "./Home.css"

function Home() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-text">
                <h1>Your Personalized Healthy Drink Solution!</h1>
                <p>
                Customize your full-meal drink with added flavors to fit your taste. Stay healthy and energized during your breaks with our quick and convenient vending machine!
                </p>
                <div className="button-group">
                    <button>Get Started</button>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/background-image.png" alt="healthy-cup example" />
            </div>
        </section>
    );
}

export default Home;