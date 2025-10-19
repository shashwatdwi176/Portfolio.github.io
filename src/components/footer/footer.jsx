import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <section id='footer'>
      <a href='#' className='footer_logo'>Shashwat Dwivedi</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#what-i-do'>What I Do</a></li>
        <li><a href='#portfolio'>Project</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>

      <div className='footer_copyright'>
        <small>&copy; All rights are reserved</small>
      </div>
    </section>
  )
}

export default Footer
