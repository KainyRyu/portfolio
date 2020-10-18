import React from "react";
import Main from "./main";
import Skills from "./projects";
import github from "./images/logos/github.svg";
import linkedin from "./images/logos/linkedin.svg";

function AComponent() {
  return (
    <div>
      <header className="App-header">
        <div className="fixedTop">
          <div className="inline">
            <h1>Kainy Ryu</h1>
            <h2>Front-End JavaScript(React) Engineer</h2>
          </div>
          <div className="inline links">
            <a
              href="https://www.linkedin.com/in/kainyryu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link" src={linkedin} alt="linkedin" />
            </a>
            <a
              href="https://github.com/KainyRyu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="links" src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className="card me">
          {/* <div className='me' src={me} alt='profile'> */}
        </div>
        <Skills />
        <div className="card detail">
          <div></div>
        </div>
        <Main />
      </header>
    </div>
  );
}
