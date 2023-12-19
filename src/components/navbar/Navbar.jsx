import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          vishakhakasture302002@gmail.com
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/vishakha-kasture-803965227/">
            <img src="./linkedin.png" alt="" />
          </a>
          <a href="#">
            <img src="./telegram.png" alt="" />
          </a>
          <a href="https://github.com/Vishakhakasture">
            <img src="./github.png" alt="" />
          </a>
          <a href="#">
            <img src="./twitter.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
