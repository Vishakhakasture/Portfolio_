import { useRef } from "react";
import "./education.scss";
import { motion } from "framer-motion";

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

const Education = () => {
  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="education"
      variants={variants}
      initial="initial"
      ref={ref}
      whileInView="animate"
    >
      <motion.div className="text-container">
        <p>
          Edcation is a progressive discovery <br />
          of our own ignorance
        </p>
        <hr />
      </motion.div>
      <motion.div
        className="title-container"
        variants={variants}
        initial="initial"
        animate="animate"
      >
        <div className="title">
          <img src="./edu.jpg" alt="" />
          <h1>
            <motion.b whileHover={{ color: "purple" }}>
              <motion.span whileHover={{ color: "white" }}>Edu</motion.span>
              cation
            </motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div
        className="list-container"
        variants={variants}
        initial="initial"
        animate="animate"
        // whileInView={{ isInView }}
      >
        <motion.div className="box">
          <div className="stream">
            <h2>SSC</h2>
            <p>
              <b>2018</b>
            </p>
          </div>
          <p>
            I have done my Secondary School Certificate from Shri.Rajarshi shahu
            vidyalay, Mukundwadi, Aurangabad, Maharastra.
          </p>
          <p>Board : Maharashtra State Board of Secondary Education</p>
          <div className="grade">
            <p>Percentage : 79.20 </p>
            <p>Grade : A</p>
          </div>
        </motion.div>
        <motion.div className="box">
          <div className="stream">
            <h2>Polytechnic</h2>
            <p>
              <b>2021</b>
            </p>
          </div>
          <p>
            I have done my diploma in polytechnic in stream computer engineering
            from MGM University, Aurangabad, Maharastra.
          </p>
          <p>Board : Maharashtra state board of technical education</p>
          <div className="grade">
            <p>Percentage : 89.37 </p>
            <p>Grade : A</p>
          </div>
        </motion.div>
        <motion.div className="box">
          <div className="stream">
            <h2>B-Tech</h2>
            <p>
              <b>2024</b>
            </p>
          </div>
          <p>
            I am currently in final year of B-tech in stream computer science
            and engineering at G.S. Mandals Marathwada institute of technology,
            Aurangabad, Maharastra.
          </p>
          <p>Board : Maharashtra state board of technical education</p>
          <div className="grade">
            <p>CGPA : 8.15</p>
            <p>Grade : A</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
