import React from "react";
import "../css/project.css";
import project from "../assets/project.png";
import weather from "../assets/weather.png";
import bmi from "../assets/bmi.png";
import ai from "../assets/ai.png";

function Projects() {
  return (
    <section id="projects">
      <h2 className="projectTitle">My Projects</h2>
      <span className="projectDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ut
        soluta quaerat a deserunt tempora in perspiciatis id quidem eaque.
      </span>
      <div className="projectImgs">
        <div className="prodiv">
          <img src={bmi} alt="" className="projectImg" />
          <p>BMI Calculator</p>
          <a
            href="https://bmi-calculator-chi-ochre.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projectbtn">View Project</button>
          </a>
        </div>
        <div className="prodiv">
          <img src={weather} alt="" className="projectImg" />
          <p>Wather App</p>
          <a
            href="https://weather-react-kappa-three.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projectbtn">View Project</button>
          </a>
        </div>
        <div className="prodiv">
          <img src={ai} alt="" className="projectImg" />
          <p>Ai Chatbot App</p>
          <a
            href="https://ai-chat-helper.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projectbtn">View Project</button>
          </a>
        </div>
        
        <div className="prodiv">
          <img src={ai} alt="" className="projectImg" />
          <p>Ai Chatbot App</p>
          <a
            href="https://multi-mart-ecommerce.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="projectbtn">View Project</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
