import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import noteapp from "../assets/note.png";
import advice from "../assets/advice.png";
import userapp from "../assets/user.png";
import portfolio from "../assets/portfolio.png";
import movieapp from '../assets/moviedb.png';
import { motion } from "framer-motion";

const Projects = () => {
  const container = {
    hidden: { opacity: 0, y: 160 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
        type: "spring",
        bounce: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 160 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="project">
      <span className="anchor"></span>
      <div className="project--head">
        <div className="project--head__center">
          <div className="center-line">
            <motion.div
              className="line"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            ></motion.div>
            <motion.small
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              getting my hands dirty with some projects
            </motion.small>
          </div>
          <h1 className="project--title">PROJECTS</h1>
        </div>

        <small className="github">
          <a 
            href="https://github.com/ayvvla" 
            target="__blank" 
            rel="noreferrer"
          >
            Github
          </a>
        </small>
      </div>

      <motion.aside
        className="project--text"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="p--item" variants={item}>
          <img src={noteapp} alt="note app" />
          <h2 className="p--item__header">Notes App</h2>
          <p className="p--item__text">
            A simple react note app, where users can enter and create notes and save
            it into local storage, search among existing notes and also delete
            an existing note.
          </p>
          <div className="project--link">
            <a
              href="https://github.com/ayvvla/react-note"
              target="_blank"
              rel="noreferrer"
            >
              Github <HiOutlineArrowNarrowRight />
            </a>
            <a
              href="https://beautnotes.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Preview <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div className="p--item" variants={item}>
          <img src={userapp} alt="random user app" />
          <h2 className="p--item__header">Random User App</h2>
          <p className="p--item__text">
            Web app to dynamically search from list of users generated by random
            API, also a paginated view of all users.
          </p>
          <div className="project--link">
            <a
              href="https://github.com/ayvvla/User-Api"
              target="_blank"
              rel="noreferrer"
            >
              Github <HiOutlineArrowNarrowRight />
            </a>
            <a
              href="https://ayoolauserapp.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Preview <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div className="p--item" variants={item}>
          <img src={advice} alt="advice app" />
          <h2 className="p--item__header">Quote generator</h2>
          <p className="p--item__text">
            A random quote generator app, where random quotes from an external
            API are shown to users and users can also cycle through new quotes
            by clicking a button.
          </p>
          <div className="project--link">
            <a
              href="https://github.com/ayvvla/advice-app"
              target="_blank"
              rel="noreferrer"
            >
              Github <HiOutlineArrowNarrowRight />
            </a>
            <a
              href="https://ayoola-advice.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Preview <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div className="p--item" variants={item}>
          <img src={portfolio} alt="portfolio app" />
          <h2 className="p--item__header">Portfolio</h2>
          <p className="p--item__text">
            A portfolio website I developed for myself to showcase my skills and
            projects.
          </p>
          <div className="project--link">
            <a href="https://github.com/ayvvla/portfolio">
              Github <HiOutlineArrowNarrowRight />
            </a>
            <a
              href="https://ayooladev.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Preview <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </motion.div>
        <motion.div className="p--item" variants={item}>
          <img src={movieapp} alt="movie app" />
          <h2 className="p--item__header">Movie Trailer Search</h2>
          <p className="p--item__text">
            A movie and movie trailer search app developed using tmdb api, where users can search for any movie and also watch the trailer. Built using Reactjs and Context Api
          </p>
          <div className="project--link">
            <a href="https://github.com/ayvvla/Movie-app">
              Github <HiOutlineArrowNarrowRight />
            </a>
            <a
              href="https://reactmovietrailer.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Preview <HiOutlineArrowNarrowRight />
            </a>
          </div>
        </motion.div>
        
      </motion.aside>
    </section>
  );
};

export default Projects;
