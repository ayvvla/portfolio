import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { BiMenuAltLeft } from "react-icons/bi";
import {IoMdClose} from "react-icons/io";
import logo from "../assets/a.webp";

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavColor = () => {
    if (window.pageYOffset >= 500) {
      setColorChange(true);
    } else setColorChange(false);
  };

  window.addEventListener("scroll", changeNavColor);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [navOpen, setNavOpen] = useState(true);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const hideNav = () => {   
    setNavOpen(true)
  }


  return (
    <header className={`header ${colorChange ? "blackbg" : ""}`}>
      <a href="#top" alt="home logo">
        <img
          src={logo}
          alt="logo"
          height="100px"
          className="logo"
          onClick={scrollToTop}
        />
      </a>

      <ul className={`nav ${navOpen ? "" : "open"}`}>
        <li className="nav--item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={hideNav}
          >
            About
          </Link>
        </li>
        <li className="nav--item">
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={hideNav}
          >
            Skills
          </Link>
        </li>
        <li className="nav--item">
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={hideNav}
          >
            Projects
          </Link>
        </li>
        <li className="nav--item nav--item__button">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={hideNav}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="mobile--menu" onClick={handleToggle}>
        {navOpen ? <BiMenuAltLeft size="2.5em"/> : <IoMdClose size="2.5em" />}
      </div>
    </header>
  );
};

export default Navbar;
