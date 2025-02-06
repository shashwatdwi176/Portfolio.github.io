import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/shashwat-pf-without-bg.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <div>
      <header>
        <div className='container header_container'>
          <h5>Hello I'm</h5>
          <h1>Shashwat Dwivedi</h1>
          <h5 className='text-light'>Aspiring Software Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ME} alt="me" />
          </div>
          <a href ="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
