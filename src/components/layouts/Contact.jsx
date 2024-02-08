import React, { useRef } from "react";
import "../css/contact.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_altl5au", "template_s016f9u", form.current, {
        publicKey: "Ka67Md91RadE6dWd6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h1 className="contactTitle">Contact me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunity
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="user_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="user_email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitbtn">
          Submit
        </button>
        <div className="links">
          <img src={facebook} alt="facebook" className="link" />
          <img src={twitter} alt="twitter" className="link" />
          <img src={instagram} alt="insta" className="link" />
          <img src={linkedin} alt="linkedin" className="link" />
        </div>
      </form>
    </section>
  );
}

export default Contact;
