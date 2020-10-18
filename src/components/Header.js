import React from "react";
import logo from "../images/kainylogo.svg";
import github from "../images/logos/github.png"
import gmail from "../images/logos/gmail.png"
import linkedin from "../images/logos/linkedin.png"
import "./header.css";

export default function Header() {
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
          <a
            href="https://github.com/KainyRyu"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-logo" src={github} alt="github" />: GitHub 
          </a>
          <a
            href="https://www.linkedin.com/in/kainyryu/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="contact-logo" src={linkedin} alt="linkedin" />: LinkedIn
          </a>
          <a href="mailto:kainy2109@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            >
            <img className="contact-logo" src={gmail} alt="gmail" />
              : Contact
          </a>
        </div>
      </div>
      <div className="today">
        <h4> <span>London</span> <span>{gmtToday()}</span></h4>
      </div>
    </div>
  );
}

function gmtToday() {
  let today = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday'];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = days[today.getUTCDay()];
  let date = today.getUTCDate();
  let month = months[today.getUTCMonth()];
  let year = today.getUTCFullYear();
 
  return(
    <span className="utc-time">
      <span>{day} </span>
      <span> {date} </span>
      <span> {month} </span>
      <span> {year}</span>
    </span>
  );
}
