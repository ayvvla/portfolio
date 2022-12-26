import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <span className="anchor"></span>
        <div className="center-line">
          <motion.div 
            className="line"
            initial={{x:-50}}
            whileInView={{x:0}}
            transition={{duration:1, ease:"easeOut"}}
            ></motion.div>
          <motion.small
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            a little about me
          </motion.small>
        </div>
        <motion.h1
          className="about--title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          ABOUT ME
        </motion.h1>
        <motion.div 
          className="about--text"
          initial={{opacity:0, x:150}}
          whileInView={{opacity : 1 , x:0}}
          viewport={{once : true}}
          transition = {
            {
              type :"spring",
              duration:2,
              bounce: 3,
              stiffness:80,
              ease:"easeInOut"
            }
          }
          >
          <p>
            I am Ayoola Michael, currently a customer service rep with a reputable fintech in Nigeria but steadily transitioning into tech. Having always had a passion for tech and programming ( studied computer science back in Uni ), I enrolled into the frontend developement track of <span>Alt School</span> early 2022. I've since then been learn many new technologies, built amazing web applications and worked in a team of amazing people
          </p>
          <p>
            I'm currently working on various frontend projects to improve and hone my skillset. I'm an avid learner, and a goal driven and passionate web developer capable of bring web designs to life. Currently open to internship, junior frontend roles and also freelance work.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default About;
