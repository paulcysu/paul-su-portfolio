import { useRef, useState } from "react";
import "../assets/styles/contact.styles.css";
import { motion } from "framer-motion";
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
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current === null) return;

    emailjs
      .sendForm(
        "service_94y20xo",
        "template_v10u2oh",
        formRef.current,
        "pX_2hasGmGcuvjXIW"
      )
      .then(
        (result) => {
          console.log(result?.text)
          setSuccess(true)
        },
        (error) => {
          console.error(error?.text);
          setError(true);
        }
      );
  };

  return (
    <section id="contact">
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="text-container" variants={variants}>
        <motion.h2 variants={variants}>Let’s work together</motion.h2>
        <motion.div className="item" variants={variants}>
          <h4>Mail</h4>
          <h4>{import.meta.env.VITE_EMAIL}</h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Address</h4>
          <h4>{import.meta.env.VITE_ADDRESS}</h4>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h4>Phone</h4>
          <h4>{import.meta.env.VITE_PHONE}</h4>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea rows={8} placeholder="Message" name="message"/>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
    </section>
  );
};

export default ContactSection;