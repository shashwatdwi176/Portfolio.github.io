import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs'; // Imported BsGithub
import { SiLeetcode } from 'react-icons/si'; // Imported SiLeetcode (you might need to install react-icons/si)

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          
          {/* Email */}
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option_icon' />
            <h4>Email</h4>
            <h5>
            dwivedishashwat176@gmail.com 
            </h5>
            <a href='mailto:dwivedishashwat176@gmail.com' target='_blank'>Send a message</a>
          </article>
          
          {/* LinkedIn */}
          <article className='contact_option'>
            <BsLinkedin className='contact_option_icon' />
            <h4>LinkedIn</h4>
            <h5>
            Shashwat Dwivedi 
            </h5>
            <a href='https://www.linkedin.com/in/shashwat-dwivedi-1264a6259/' target='_blank'>View Profile</a>
          </article>
          
          {/* GitHub - NEW */}
          <article className='contact_option'>
            <BsGithub className='contact_option_icon' />
            <h4>GitHub</h4>
            <h5>
            shashwatdwi176
            </h5>
            <a href='https://github.com/shashwatdwi176' target='_blank'>View Repositories</a> {/* NOTE: Replace with your actual GitHub link */}
          </article>

          {/* LeetCode - NEW */}
          <article className='contact_option'>
            <SiLeetcode className='contact_option_icon' />
            <h4>LeetCode</h4>
            <h5>
            500+ Problems Solved 
            </h5>
            <a href='https://leetcode.com/u/shashwatdwi176/' target='_blank'>View Profile</a> {/* NOTE: Replace with your actual LeetCode link */}
          </article>
          
          {/* Twitter (Optional, placed at the end) */}
          
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