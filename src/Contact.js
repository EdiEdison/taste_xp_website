import "./Contact.css"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_apmda9b",
        "template_bt4kima", 
        formRef.current,
        "vxOOV5kpvEpZSMtmJ" 
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );

    e.target.reset(); 
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Send us a message below:</p>
      <form ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
