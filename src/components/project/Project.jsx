import "./project.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Portfolio",
    image: "./portfolio.png",
    description:
      "This project is simply a compilation of my academic and professional materials that exemplifies my beliefs, skills, qualifications, education, training, and experiences. Technologies used for developing this project are HTML, CSS, Javascript and React.",
    github: "https://github.com/Vishakhakasture/Portfolio_",
  },
  {
    id: 2,
    title: "Agrosell application",
    image: "./agrosell_app.jpg",
    description:
      "Agrosell is an mobile application in which farmers can sell their products online and can gain profitable amount.These project is of GeeksForGeeks Hackathon on theme Agrotech and Buitld using Flutter, and for backend we used Firebase. ",
    github: "https://github.com/Vishakhakasture/Agrosell-application",
  },
  {
    id: 3,
    title: "Sadguru Krupa",
    image: "./sadguru_krupa.jpg",
    description:
      "Sadguru krupa is an gift shopee.From these website the customer can order the gifts, ferns and petals.These project is the final project of my internship where i designed the frontend of it by using html,css,react and tailwind.",
    github: "https://github.com/Vishakhakasture/sadguru",
  },
  {
    id: 4,
    title: "Shiksha Sankalp",
    image: "./shikshasankalp.jpg",
    description:
      "Shiksha sankalp is an web application which provides the video contents and courses freely availabe to students.And it also have the tweet application from which they can tweet and chat with each others.If any student wants to teach the courses and share their experience for that there is also an option of uploading the videos.",
    github: "https://github.com/Vishakhakasture/shikshasankalp",
  },
];

// eslint-disable-next-line react/prop-types
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div className="image-container" ref={ref}>
            {/*  eslint-disable-next-line react/prop-types */}
            <img src={item.image} alt="" />
          </motion.div>
          <motion.div className="text-container" style={{ y }}>
            {/* eslint-disable-next-line react/prop-types */}
            <h2>{item.title}</h2>
            {/* eslint-disable-next-line react/prop-types */}
            <p>{item.description}</p>
            <motion.a
              className="github"
              // eslint-disable-next-line react/prop-types
              href={item.github}
              rel="noreferrer"
              target="_blank"
              whileHover={{ scale: 1.0 }}
            >
              View
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h2>
          Featured <b style={{ color: "white" }}>Works</b>
        </h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;
