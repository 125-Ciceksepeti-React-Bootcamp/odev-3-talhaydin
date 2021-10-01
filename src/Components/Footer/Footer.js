import React from 'react';
import './footer.css';
import github from './github.svg';
import linkedin from './linkedin.svg';

function Footer() {
  return (
    <div className="footer">
      <i>Created by Talha Aydın</i>
      <div className="break"></div>
      <div className="link_container">
        <a href="https://github.com/talhaydin/" target="blank">
          <img alt="github" src={github} className="github_svg"></img>
        </a>
        <a href="https://www.linkedin.com/in/mtalha-aydin/" target="blank">
          <img alt="linkedin" src={linkedin} className="linkedin_svg"></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
