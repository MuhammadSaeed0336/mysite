import "./Contact.css";
import { MdAttachEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { RiMessengerFill } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdAttachEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>
              muhammadsaeed033696
              <br />
              @gmail.com
            </h5>
            <a href="mailto:muhammadsaeed033696@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiMessengerFill className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Muhammad Saeed</h5>
            <a href="http://m.me/earnest.achiever" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact_option">
            <RiWhatsappFill className="contact_option_icon" />
            <h4>Whatsapp</h4>
            <h5>+92 336 9682471</h5>
            <a
              href="http://api.whatsapp.com/send?phone+923369682471"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
