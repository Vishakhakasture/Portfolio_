import "./skills.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import Skill from "./Skill";

const variants = {
  initial: {
    x: -800,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stagerChildren: 0.1,
    },
  },
};

const Skills = () => {
  const ref = useRef();
  return (
    <div className="skills">
      <div className="title-container">
        <div className="title">
          <img src="/skills.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "purple" }}>Skills</motion.b>
          </h1>
        </div>
      </div>

      <motion.div
        variants={variants}
        initial="initial"
        ref={ref}
        whileInView="animate"
        className="skill-section"
      >
        <Skill />
      </motion.div>
    </div>
  );
};

export default Skills;
