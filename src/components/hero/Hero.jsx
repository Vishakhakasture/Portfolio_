import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h4 variants={textVariants}>
            <b>vishakha kasture</b>
          </motion.h4>
          <motion.h1 variants={textVariants}>software engineer</motion.h1>
          <motion.p variants={textVariants}>
            I am passionate about learning new technologies and programming
            languages. Throughout my academic career, I have been deeply
            interested in exploring the fascinating world of computer science. I
            enjoy challenging myself with complex algorithms and problem-solving
            and I am constantly looking for ways to enhance my skills and
            knowledge. I am excited about the opportunities that lie ahead and
            look forward to applying my knowledge and skills to make a positive
            impact in the world of computer science.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              See the latest works
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer & programmer.
      </motion.div>
      <div className="image-container">
        <img src="./profile.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
