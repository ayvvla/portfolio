import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import avatar from "../assets/ayo.png"
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div className="hero--text" initial = {{x:-1000}} animate={{x:0}}
        transition = {{duration:1,ease:"easeInOut"}}>
        <h1>
          <span>Hello</span>, I am Ayoola
        </h1>
        <div className="typewriter">
          <TypeWriter
            options={{
              strings: ["I'm a Front-end Engineer."],
              autoStart: true,
              pauseFor: 10500,
              loop: true,
              skipAddStyles: false,
            }}
          />
        </div>
        <p className="hero--text__main">
          A web developer who likes to create and build exciting and challeging
          projects. I have a passion for discovering new things and also
          learning new technologies.
        </p>
        <div className="hero--links">
          <a href="https://twitter.com/Ayvvla" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/ayvvla" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayoola-michael-519407176/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial = {{x: 1000}}
        animate = {{x:0}}
        transition = {{duration:1, ease:"easeInOut"}}
      >
        <img
          src={avatar}
          alt="avatar"
          className="hero--img"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
