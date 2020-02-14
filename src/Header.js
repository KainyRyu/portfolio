import React from "react";
import logo from "./images/kainylogo.svg";
import CopyEmail from "./CopyEmail";
import "./header.css";

export default function Header() {
  return (
    <div className="timesHeader">
      <div className="timesHeader-top">
        <div className="timesHeader-box">
          <p>“Full-Stack JavaScript Developer”</p>
        </div>
        <div className="logo">
          <img src={logo} alt="Kainy Ryu" />
        </div>
        <div className="timesHeader-box">
          <p>
            <a
              href="https://github.com/KainyRyu"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/kainyryu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <br />
            <a href="mailto:kainy2109@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              >
                Contact
            </a>
            {/* <CopyEmail /> */}
          </p>
        </div>
      </div>
      <div className="weather">
        <h4> {gmtToday()} /  LONDON</h4>
      </div>
    </div>
  );
}
// toISOString()
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
    {/* <span>{todayGMT}</span> */}
    <span>{day} </span>
    <span> {date} </span>
    <span> {month} </span>
    <span> {year}</span>
  </span>
  );
}
