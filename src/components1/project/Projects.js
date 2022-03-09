import React from 'react';

import projectDR from '../../assets/project_dr.png';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.gif';
import './Project.css';

export default function Project() {
  return (
    <>
      <div className="dr-wrapper">
        <a
          className="dr-a"
          href="https://dailyreview-7e684.web.app/"
          rel="noopener noreferrer"
          target="_blank">
          <img className="image project-img" src={projectDR} alt="Daily Review" />
        </a>
        <div className="dr-text-wrapper">
          <a
            className="dr-a"
            href="https://dailyreview-7e684.web.app/"
            rel="noopener noreferrer"
            target="_blank">
            <h3 className="project-title">Daily Review (ongoing project)</h3>
          </a>
          <p className="project-summary">
            It's a scheduler that you can review how you perform for the times. Once you log in you
            will see your daily plan on the main. So you can edit your plan for the day. Also there
            is a todo list that you can manage depends on your priority. Using{' '}
            <span className="strong"> Firebase</span> for authentication, hosting and realtime
            database. Daily planer is saved on realtime database; however priorities will be saved
            locally. Check{' '}
            <a
              href="https://github.com/KainyRyu/daily_review/blob/master/README.md"
              rel="noopener noreferrer"
              target="_blank">
              README.md
            </a>
            .
          </p>
        </div>
      </div>
      <div className="timesProject">
        <div id="project-first">
          <a
            href="https://nadinefresko.github.io/group_project/"
            rel="noopener noreferrer"
            target="_blank">
            <img className="image project-img" src={project1} alt="recycling" />
            <h3 className="project-title">Mind Your Rubbish</h3>
          </a>
          <p className="project-summary">
            Best to test on a desktop view. It has a recycling
            <span className="strong"> drag and drop game</span> and using{' '}
            <span className="strong"> svg files </span>to separate each London borough. Using{' '}
            <span className="strong"> Twitter API</span> for updating Recycling & Waste World
            Magazine. Please feel free to check your recycling skill.
          </p>
        </div>
        <div id="project-second">
          <a href="https://kodflix-kainy.herokuapp.com" rel="noopener noreferrer" target="_blank">
            <img className="image project-img" src={project2} alt="recycling" />
            <h3 className="project-title">Kodflix</h3>
          </a>
          <p className="project-summary project-mid">
            A film library it shows the film's detail; built with{' '}
            <span className="strong"> ReactJS</span>. It gets the film data from the back-end server
            which is required to use <span className="strong">nodeJS, expressJS and mongoDB</span>.
          </p>
        </div>
        <div id="project-third">
          <a href="https://we-pair.herokuapp.com" rel="noopener noreferrer" target="_blank">
            <img className="image project-img" src={project3} alt="We-Pair" />
            <h3 className="project-title">WePair</h3>
          </a>
          <p className="project-summary">
            An app specifically for developers who would like to pair programming. The user can
            search for the languages and locations then reqest to another user if the date is
            available. This was a group project
          </p>
        </div>
        <div id="project-fourth">
          <a
            href="http://relieved-process234567.surge.sh/"
            rel="noopener noreferrer"
            target="_blank">
            <img className="image project-img" src={project4} alt="tell my GP" />
            <h3 className="project-title">tell my GP</h3>
          </a>
          <p className="project-summary">
            Participated 'UK vs COVID-19 Hackathon'; Connecting the patients and GP surgeries to
            track COVID-19 symptoms daily. Using{' '}
            <span className="strong">Gatsby, React, Material UI and Firebase.</span>
          </p>
        </div>
      </div>
    </>
  );
}
