import "./contact.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_32p7k24",
        "template_tje27qr",
        formRef.current,
        "JV3T7TAkVQEzW6wLH"
      )
      .then(
        () => {
          setSuccess(true);
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.div className="image" variants={variants}>
          <img src="/connect.jpg" alt="" />
        </motion.div>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="name" variants={variants}>
          <h2>Vishakha Kasture</h2>
          <h4>Software Engineer</h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Mail me</h4>
          <span>vishakhakasture302002@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea
            rows={8}
            required
            placeholder="Message"
            name="message"
          ></textarea>
          <button>Submit</button>
          {error && "Error"}
          {success && "Thank you for texting!"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
