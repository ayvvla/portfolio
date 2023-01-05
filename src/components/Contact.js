import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { BsPhone, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  const formRef = useRef(null);
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false);

  const scriptUrl = "https://script.google.com/macros/s/AKfycbylsPqBo7xQoHg3tUn4fiAl5tKe7PcxMgrt0nHxsnBcp6zwfizqLJ8xei30yuYvpULT/exec"
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, { method: "POST", body: new FormData(formRef.current) })
      .then((res) => {
        toast.success("Message Sent", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setLoading(false);
        formRef.current.reset()
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };

  return (
    <section id="contact" className="contact">
      <span className="anchor"></span>
      <div className="center-line">
        <motion.div
          className="line"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.small
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          you can reach my
        </motion.small>
      </div>
      <h1 className="contact--title">CONTACT</h1>

      <div className="contact--text">
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <input
            type="text"
            name="Name"
            ref={inputRef}
            placeholder="Your Name..."
            className="input"
            required
          />
          <input
            type="email"
            name="Email"
            ref={inputRef}
            placeholder="Your Email..."
            className="input"
            required
          />
          <textarea
            name="Message"
            ref={inputRef}
            placeholder="Your Message...."
            cols="10"
            rows="15"
            required
          />
          <motion.button
            className="contact--btn"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {loading ? "SENDING..." : "SEND MESSAGE"}
          </motion.button>
        </form>

        <motion.aside
          className="contact--paragraph"
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p>
            If you have any questions or want to make me an offer, please feel
            free to drop me a line (or more). If you don't get an answer
            immediately, I might just be stuck in Lagos traffic. I'll get back
            to you as soon as I can.
          </p>
          <p>
            I'm also available for collaborations. Reach out and let's
            build something fun.
          </p>
          <p>Also available via -</p>
          <div className="contact--menu">
            <div className="contact--menu__item">
              <a href="tel:+2348143989534">
                <BsPhone size="2em" />
              </a>
              <p>Call</p>
            </div>
            <div className="contact--menu__item">
              <a href="https://wa.me/2348143989534">
                <BsWhatsapp size="2em" />
                <p>Whatsapp</p>
              </a>
            </div>
            <div className="contact--menu__item">
              <a href="mailto:ayoolamikel@gmail.com">
                <MdOutlineMail size="2em" />
              </a>
              <p>Email</p>
            </div>
          </div>
        </motion.aside>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
