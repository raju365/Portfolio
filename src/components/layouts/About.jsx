import React from "react";
import app from "../assets/app.png";
import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import "../css/skills.css";
function About() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled web developer with experiance in creating <br />
        visually appealing and user friendly websites
      </span>
      <div className="skillBars">
        <div className="skillbar">
          <img src={web} alt="web" className="skillbar" />
          <div className="skillbarText">
            <h2>Web developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={app} alt="" className="skillbar" />
          <div className="skillbarText">
            <h2>App developer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={mobile} alt="" className="skillbar" />
          <div className="skillbarText">
            <h2>Mobile application</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
