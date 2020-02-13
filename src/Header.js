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
            <a href="mailto:kainy2109@gmail.com">Contact</a>
            {/* <CopyEmail /> */}
          </p>
        </div>
      </div>
      <div className="weather">
        <h4>London {gmtToday}</h4>
      </div>
    </div>
  );
}
// toISOString()
function gmtToday() {
  let today = new Date();
  // let todayGMT = today.toISOString();
  // let day = todayGTM.getDate;

  return <span>{today.toISOString()}</span>;
}
