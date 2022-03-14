import React from 'react';
import logo from '../assets/kainylogo.svg';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';
import linkedin from '../assets/logos/linkedin.png';
import './header.css';
import { gmtToday } from '../lib/helper';

export default function Header() {
  const { day, date, month, year } = gmtToday();
  return (
    <div className="timesHeader">
      <div className="timesHeader-top">
        <div className="timesHeader-box">
          <p className="title">“Front-End Developer”</p>
        </div>
        <div className="logo-box">
          <img className="logo" src={logo} alt="Kainy Ryu" />
        </div>
        <div className="timesHeader-box links">
          <a href="https://github.com/KainyRyu" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={github} alt="github" />: GitHub
          </a>
          <a href="https://www.linkedin.com/in/kainyryu/" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={linkedin} alt="linkedin" />: LinkedIn
          </a>
          <a href="mailto:kainy2109@gmail.com" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={gmail} alt="gmail" />: Contact
          </a>
        </div>
      </div>
      <div className="today">
        <h4>
          {' '}
          <span>London</span>{' '}
          <span>
            <span className="utc-time">
              <span>{day} </span>
              <span> {date} </span>
              <span> {month} </span>
              <span> {year}</span>
            </span>
          </span>
        </h4>
      </div>
    </div>
  );
}
