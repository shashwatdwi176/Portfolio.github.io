import React from "react";
import { BsLinkedin } from "react-icons/bs";
import {BsGithub} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {BsDiscord} from 'react-icons/bs';
import { SiLeetcode } from "react-icons/si";


const HeaderSocials = () => {
  return (
    <div className="header_socials">
      
      <a
        href="https://www.linkedin.com/in/shashwat-dwivedi-1264a6259/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://leetcode.com/u/shashwatdwi176/"
        target="_blank"
      >
        <SiLeetcode size={20}  />
      </a>
      <a href="https://github.com/shashwatdwi176" target="_blank"><BsGithub/></a>
      <a href="https://twitter.com/Shashwat176" target="_blank"><BsTwitter /></a>
      <a href="https://discord.com/invite/shashwatdwi176" target="_blank"><BsDiscord /></a>
    </div>
  );
};

export default HeaderSocials;
