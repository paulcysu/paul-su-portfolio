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
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current === null) return;
    if (!validateEmail(email)) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result?.text);
          setError(false);
          setSuccess(true);
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
            <h4 className="web-highlight">{import.meta.env.VITE_EMAIL}</h4>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h4>Address</h4>
            <h4 className="web-highlight">{import.meta.env.VITE_ADDRESS}</h4>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h4>Phone</h4>
            <h4 className="web-highlight">{import.meta.env.VITE_PHONE}</h4>
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
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              autoComplete="on"
            />
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              onChange={handleEmailChange}
              autoComplete="on"
            />
            {emailError && <p className="invalid-email-error">{emailError}</p>}
            <textarea rows={8} required placeholder="Message" name="message" />
            <button
              style={{ backgroundColor: success ? "green" : "yellow" }}
              disabled={success}
            >
              {success ? "Sent" : "Submit"}
            </button>
            {error && <p style={{ color: "red" }}>{error && "Error"}</p>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
