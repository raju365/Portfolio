import React from "react";
import "../css/project.css";
import project from "../assets/project.png";

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
          <img src={project} alt="" className="projectImg" />
          <p>Project Name</p>
          <button className="projectbtn">View Project</button>
        </div>
        <div className="prodiv">
          <img src={project} alt="" className="projectImg" />
          <p>Project Name</p>
          <button className="projectbtn">View Project</button>
        </div>
        <div className="prodiv">
          <img src={project} alt="" className="projectImg" />
          <p>Project Name</p>
          <button className="projectbtn">View Project</button>
        </div>
        <div className="prodiv">
          <img src={project} alt="" className="projectImg" />
          <p>Project Name</p>
          <button className="projectbtn">View Project</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
