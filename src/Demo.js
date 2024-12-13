import React from "react";
import "./Demo.css";

function DemoSection() {
    return (
        <section id="demo" className="demo-section">
            <h2>Watch How It Works</h2>
            <p>Discover how our vending machine can provide you with a customizable, healthy drink in seconds!</p>
            <div className="video-container">
                <iframe 
                    src="/videos/demo.mp4" 
                    title="Demo Video" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </section>
    );
}


export default DemoSection;