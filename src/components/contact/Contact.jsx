import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from "react-icons/bs";
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>
            dwivedishashwat176@gmail.com
            </h5>
            <a href='mailto:dwivedishashwat176@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsTwitter  className='contact_option_icon'/>
            <h4>Twitter</h4>
            <h5>
            @Shashwat176
            </h5>
            <a href='https://twitter.com/Shashwat176' target='_blank' className='linkedin_twitter'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsLinkedin className='contact_option_icon' />
            <h4>Linkedin</h4>
            <h5>
            Shashwat Dwivedi
            </h5>
            <a href='https://www.linkedin.com/in/shashwat-dwivedi-1264a6259/' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* <form action=''>
          <input type ='text' name =  'name' placeholder='Your Full Name' required />
          <input type ='email' name =  'email' placeholder='Your Email' required />
          <textarea name='message' row='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact
