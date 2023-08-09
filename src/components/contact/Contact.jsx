import "./Contact.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bxyxyuc",
      "template_hpequ4p",
      form.current,
      "uiXLOIoK15lHesQSn"
    );
    e.target.reset();
  };

  const notify = () => {
    if(toast.success){
      toast.success('Successfully message Send!');
    }else{
      toast.error('Something went Wrong')
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn" onClick={notify}>
            Send Message <ToastContainer position="top-left" />
          </button>
        </form>
        {/* end of form*/}

        <div className="contact_option">
            <iframe className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212780.22019970918!2d72.85333494482117!3d33.56140540046243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df948974419acb%3A0x984357e1632d30f!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691044090766!5m2!1sen!2s"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="Contact Me"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div></div>
    </section>
  );
};

export default Contact;
