import React from 'react';
import Profile from '../components_v1/profile';
import Header from '../components_v1/Header';
import Activities from '../components_v1/activities/Activities';
import Project from '../components_v1/project/Projects';

function V1() {
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

export default V1;
