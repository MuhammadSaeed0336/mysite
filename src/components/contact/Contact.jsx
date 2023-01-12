import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiWhatsappFill} from "react-icons/ri";
import {RiMessengerFill} from "react-icons/ri";

const Contact =() => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>abc@gmail.com</h5>
            <a href="mailto:abc@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerFill className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h5>MrsKK</h5>
            <a href="http://m.me/earnest.achiever" target="_blank">Send a message</a>
          </article>

          <article className='contact_option'>
            <RiWhatsappFill className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h5>+92 336 9682471</h5>
            <a href="http://api.whatsapp.com/send?phone+923369682471" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of contact option */}
        <form >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="text" rows="7" placeholder='Your Message' required></textarea>
          <button type='button' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;