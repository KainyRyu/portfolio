import React from 'react';
import profileImg from '../assets/bwbg.gif';
import '../pages/page1.css';

export default function Profile() {
  return (
    <div className="timesProfile">
      <img className="image" src={profileImg} alt="Me" />
      <div className="profile-summary">
        <div className="profile-summary-p">
          <label className="the-first">A</label> Front-End developer keen to learn new skills and
          collaborate with others. A firm believer in discipline and self-driven process in
          learning. working well in specialist teams in exciting and continually developing
          environments.
        </div>
        <div className="profile-summary-p">
          I am exposed to multicultural points of view integrated with a sociable and tactful
          personality, always enjoying the challenge of working under pressure either independently
          or as a member of a team within an agile team.
        </div>
        {/* <p>Started coding for fun and now I am more serious </p> */}
      </div>
    </div>
  );
}
