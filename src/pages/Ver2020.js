import React from 'react';
import Profile from '../ver2020/profile1';
import Header from '../ver2020/Header1';
import Activities from '../ver2020/activities/Activities';
import Project from '../ver2020/project/Projects';

export default function Ver2020() {
  return (
    <div className="main-page">
      <div className="timesbg">
        <Header />
        <div className="timesBody">
          <Profile />
          <div className="body-right">
            <h1 className="skills">
              “Skills : JavaScript, ReactJS, GatsbyJS, Firebase, NodeJS, mongoDB, Express, HTML5,
              CSS3, Bootstrap3, Material-UI and more are coming..”
            </h1>
            <Activities />
          </div>
        </div>
        <div className="project-label-container">
          <h1 className="project-label">PROJECTS;</h1>
          <span className="project-label-span">
            click the <span className="underline">images</span> or the{' '}
            <span className="underline">underlined text</span> to see my work.
          </span>
        </div>
        <Project />
      </div>
    </div>
  );
}
