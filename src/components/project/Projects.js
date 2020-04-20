import React from "react";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.gif";
import "./Project.css";

export default function Project() {
  return (
    <>
      <div className="timesProject">
        <div id="project-first">
          <a
            href="https://nadinefresko.github.io/group_project/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="image project-img" src={project1} alt="recycling" />
            <h3 className="project-title">Mind Your Rubbish</h3>
          </a>
          <p className="project-summary">
            Best to test on a desktop view. It has a recycling
            <span className="strong"> drag and drop game</span> and using{" "}
            <span className="strong"> svg files </span>to separate each London
            borough. Using <span className="strong"> Twitter API</span> for
            updating Recycling & Waste World Magazine. Please feel free to check
            your recycling skill.
          </p>
        </div>
        <div id="project-second">
          <a
            href="https://kodflix-kainy.herokuapp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="image project-img" src={project2} alt="recycling" />
            <h3 className="project-title">Kodflix</h3>
          </a>
          <p className="project-summary project-mid">
            A film library built with <span className="strong"> ReactJS</span>.
            It gets the film datas from the back-end server which is required to
            use <span className="strong">nodeJS, expressJS and mongoDB</span>.
            It is ongoin program.
          </p>
        </div>
        <div id="project-third">
          <a
            href="https://we-pair.herokuapp.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="image project-img" src={project3} alt="We-Pair" />
            <h3 className="project-title">WePair</h3>
          </a>
          <p className="project-summary">
            An app specifically for developers who would like to pair
            programming. The user can search for the languages and locations
            then reqest to another user if the date is available. This is a
            group project which just started.
          </p>
        </div>
        <div id="project-fourth">
          <a
            href="http://relieved-process234567.surge.sh/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="image project-img" src={project4} alt="tell my GP" />
            <h3 className="project-title">tell my GP</h3>
          </a>
          <p className="project-summary">
            Using Gatsby, React, Material UI and Firebase.
          </p>
        </div>
      </div>
    </>
  );
}
