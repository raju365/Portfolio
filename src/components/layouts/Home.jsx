import React from "react";
import resume from "../assets/resume.pdf";
import hire from "../assets/hire.png";
import profile from "../assets/profile.png";
import "../css/intro.css";

function Home() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Raju barman</span>
          <br />
          web developer
        </span>
        <p className="introPara">
          I am a skilled web developer with experiance in creating <br />
          visually appealing and user friendly websites
        </p>
        <a href={resume} target="_blank" rel="noreferrer" download>
          <button className="btn">
            <img src={hire} alt="" className="btnImg" /> Hire me
          </button>
        </a>
      </div>
      <img src={profile} alt="" className="introBg" />
    </section>
  );
}

export default Home;
