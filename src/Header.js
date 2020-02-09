import React from "react";
import logo from './images/kainylogo.svg';
import CopyEmail from './CopyEmail';
import './header.css'

export default function Header() {
  return (
    <div className="timesHeader flexColumn">
      <div>
        <div className="timesHeader-box">
            <p>“Full-Stack JavaScript Developer”</p>
        </div>
        <img className="logo" src={logo} alt="Kainy Ryu" />
        <div className="timesHeader-box">
            <p>
                <a
                href="https://github.com/KainyRyu"
                rel="noopener noreferrer"
                target="_blank"
                >
                GitHub
                </a>{" "}
                <br />
                <a
                href="https://www.linkedin.com/in/kainyryu/"
                rel="noopener noreferrer"
                target="_blank"
                >
                LinkedIn
                </a>{" "}
                <br />
                <CopyEmail />
            </p>
        </div>
    </div>
    <div className="highlight">
        <label>
          HTML CSS Bootstrap JavaScript React NodeJS MongoDB Express{" "}
        </label>
    </div>
    </div>
  );
}


