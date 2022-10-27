import React from 'react'
import './contact.css'
import {SiGmail} from 'react-icons/si'
import {FaFacebookMessenger} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import {useRef as UseRef } from "react";
import emailjs from '@emailjs/browser';

const contact = () => {
    const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3atgd34', 'template_ozhpvxs', form.current, '8KdErgvZTAUGp-plu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className='container contact__container'>
          <div className="contact__options">
            <article className='contact__option'>
              <SiGmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>hafizunisamohammed@gmail.com</h5>
              <a href="mailto:hafizunisamohammed@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <FaFacebookMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Hafizunisamohammed</h5>
              <a href="https://m.me/hafizunisa.mohammed" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+917541871348</h5>
              <a href="https://api.whatsapp.com/send?phone=7541871348" target="_balnk">Send a Message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" id="" placeholder='Your Full Name' required/>
            <input type="email" name="email" id="" placeholder='Your Email' required/>
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    
        </section>
  )
}

export default contact