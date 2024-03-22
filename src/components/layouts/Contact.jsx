import React, { useRef, useState } from "react";
import "../css/contact.css";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    setEmail("");
    setMsg("");
    setName("");
    toast.success("Email sent successfully");

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
          value={name}
          className="name"
          placeholder="Your Name"
          name="user_name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          value={email}
          className="email"
          placeholder="Your Email"
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          className="msg"
          value={msg}
          rows="5"
          placeholder="Your Message"
          onChange={(e) => setMsg(e.target.value)}
          required
        ></textarea>
        <button type="submit" value="send" className="submitbtn">
          Submit
        </button>
        <div className="links">
          <a href="https://github.com/raju365" target="_blank" rel="noreferrer">
            <img src={github} alt="twitter" className="link" />
          </a>
          <a
            href="https://x.com/RajuBarman365"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" className="link" />
          </a>
          <a
            href="https://www.instagram.com/rajbarman365"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="insta" className="link" />
          </a>
          <a
            href="https://www.linkedin.com/in/raju-barman365"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
}

export default Contact;
