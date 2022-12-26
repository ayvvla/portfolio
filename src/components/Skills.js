import React from "react";
import { FaHtml5, FaCss3Alt, FaVuejs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

const Skills = () => {
  const container = {
    hidden : {opacity : 0},
    show : {
      opacity : 1,
      transition : {
        staggerChildren : .2,
        type : "spring",
        bounce : 3
        
      }
    } 
  }

  const item = {
    hidden: {opacity : 0, x: -100},
    show : {opacity : 1, x:0},
  }   

  const rightItem = {
    hidden: {opacity: 0, x:100},
    show: {opacity: 1, x:0},
  }

  const centerItem = {
    hidden : {opacity : 0},
    show : { opacity : 1, x:0},
  }

  return (
    <>
      <section className="skills" id="skills">
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
            some of my
          </motion.small>
        </div>
        <h1 className="skills--title">SKILLS</h1>
        <motion.div 
          className="skills--text"
          variants={container}
          initial="hidden"
          whileInView ="show"
          viewport={{once : true}}
          >
          <motion.div className="skills--text__logo" variants={item}>
            <FaHtml5 size="4em" />
            <motion.b whileHover={{scale:1.2}}>HTML5</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={centerItem}>
            <FaCss3Alt size="4em" />
            <motion.b whileHover={{scale:1.2}}>CSS3</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={rightItem}>
            <FaReact size="4em" />
            <motion.b whileHover={{scale:1.2}}>REACT</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={item}>
            <TbBrandNextjs size="4em" />
            <motion.b whileHover={{scale:1.2}}>NEXT JS</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={centerItem}>
            <FaVuejs size="4em" />
            <motion.b whileHover={{scale:1.2}}>VUE</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={rightItem}>
            <FaGitAlt size="4em" />
            <motion.b whileHover={{scale:1.2}}>GIT</motion.b>
          </motion.div>
          <motion.div className="skills--text__logo" variants={centerItem}>
            <SiFirebase size="4em" />
            <motion.b whileHover={{scale:1.2}}>FIREBASE</motion.b>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
