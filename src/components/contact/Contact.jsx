import axios from "axios";
import "./Contact.css";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  email: '',
  message: '',
};
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  message: Yup.string().required("Message is required"),
});


const Contact = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values , { setSubmitting }) => {
      axios
      .post("https://formspree.io/f/myyqjobp", values, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(`Thanks ${values.name}, form submitted successfully!`);
        } else {
          toast.error("Something went wrong!");
        }
        setSubmitting(false);
      })
      .catch((error) => {
        toast.error("Something went wrong!");
        setSubmitting(false);
      });
      toast.success(`Thanks ${values.name}, form validation successful!`);
    },
  });

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
      <form onSubmit={formik.handleSubmit}>
              <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <input type="email" name="email" placeholder="Your Email" required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
             />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          <button type="submit" className="btn" disabled={formik.isSubmitting}>
            Send Message 
          </button>
          <ToastContainer position="top-left" />
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
