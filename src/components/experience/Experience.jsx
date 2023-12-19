import "./experience.scss";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="experience">
      <div className="title-container">
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "purple" }}>Experience</motion.b>
          </h1>
          <img src="/experience.jpeg" alt="" />
        </div>
      </div>
      <div className="organization">
        <div className="role">
          <div className="position">
            <h2>Web Developer</h2>
            <img src="./web.jpg" alt="" />
          </div>
        </div>
        <div className="work">
          <div className="responssibility">
            <p>
              - Designing, developing, and maintaining websites and web
              applications.
            </p>
            <p>– Designs, writes, and edits website content.</p>
            <p>
              – Executes assignments with the use of web applications, scripts,
              and programming languages such as HTML, CSS, JavaScript, React.
            </p>
            <p>- Learned about deploying and hosting an website.</p>
          </div>
          <div className="technologies">
            <h3>- Technologies :</h3>
            <p>HTML,CSS,Javascript,React,Redux,Tailwind,Bootstrap,Mongo DB !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
