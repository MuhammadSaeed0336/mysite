import axios from "axios";
import "./Contact.css";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState(new FormData())

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!(formData.name && formData.email && formData.message)) {
      toast.error('Something went wrong!')
      return
    }

    toast.success(`Thanks ${formData.name}, form Submitted Successfully!`)
    axios.post('https://formspree.io/f/myyqjobp', formData, {
      Accept: 'application/json',
    })
    setFormData({})
  }

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />
          <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn" onClick={handleSubmit}>
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
    </section>
  );
};

export default Contact;
