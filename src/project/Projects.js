import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="timesProject">
      <label className='project-label'>PROJECTS, <span className='project-label-span'>click the text to see my works</span></label>
      <div className="topBorder">
        <a     
          href="https://nadinefresko.github.io/group_project/"
          rel="noopener noreferrer"
          target="_blank"
        >
        <img className="image" src={project1} alt="recycling" />
          <h3 className="project-title">Mind Your Rubbish</h3>
        </a>
        <p className='project-summary'>
            It works better with computer. It has a recycling
            <span className='strong'> drag and drop game</span> and using <span className='strong'> svg file </span>for devide each London borough.
            Using <span className='strong'> twiter API</span> for updating Recycling & Waste World Magazine. Please
            feel free to check your recycling skill.
        </p>
      </div>
      <div className="topBorder">
        <a
          href="https://kodflix-kainy.herokuapp.com"
          rel="noopener noreferrer"
          target="_blank"
        >
        <img className="image" src={project2} alt="recycling" />
          <h3 className="project-title">Kodflix</h3>
        </a>
        <p className='project-summary'>
             A film library built with <span className='strong'> ReactJS</span>. It gets the film datas from the
            back-end server which is required to use <span className='strong'>nodeJS, expressJS and
            mongoDB</span>. It is still on process.
        </p>
      </div>
      <div className="topBorder">
        {/* <a href=''  rel="noopener noreferrer" target='_blank'> */}
        <div className='placeholder'></div>
        <h3 className="project-title">WePair</h3>
        {/* </a> */}
        <p className='project-summary'>
          An app specifically for developers who would like to pair programming.
          The user can reqest to another user if the date is available. This is
          a group project which just started.
        </p>
      </div>
    </div>
  );
}
