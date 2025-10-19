import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiComputerLine} from 'react-icons/ri' // We'll use this for Portfolio
import {BsFillLightningChargeFill} from 'react-icons/bs' // NEW ICON for What I Do
import {BiMessageSquareDetail} from 'react-icons/bi'
import{useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* Home */}
      <a href="#" onClick={() => setActiveNav("#")} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      
      {/* About Me */}
      <a href="#about" onClick={() => setActiveNav("#about")} className= {activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      
      
      
      {/* Experience */}
      <a href="#experience" onClick={() => setActiveNav("#experience")} className= {activeNav === '#experience' ? 'active' : ''}><BiBook/></a>

      {/* What I Do (NEW SECTION) */}
      <a href="#what-i-do" onClick={() => setActiveNav("#what-i-do")} className= {activeNav === '#what-i-do' ? 'active' : ''}><BsFillLightningChargeFill/></a>
      
      {/* Portfolio (Projects) */}
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className= {activeNav === '#portfolio' ? 'active' : ''}><RiComputerLine/></a>
      
      {/* Contact */}
      <a href="#contact" onClick={() => setActiveNav("#contact")} className= {activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav