import React, { useState } from "react";
import "../css/navbar.css";
import chat from "../assets/chat.png";
import menu from "../assets/menu.png";
import { Link } from "react-scroll";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <h3 className="logo">Portfolio</h3>
      <div className="desktopMenu">
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="intro"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
          to="skills"
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
          to="projects"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          to="contact"
        >
          Contact
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={chat} alt="" className="desktopMenuImg" />
        Contact me
      </button>
      <img
        src={menu}
        alt="menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobMenuListItem"
          to="home"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobMenuListItem"
          to="about"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobMenuListItem"
          to="contact"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="mobMenuListItem"
          to="projects"
          onClick={() => setShowMenu(false)}
        >
          Projects
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
