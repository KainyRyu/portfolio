import React from 'react';
import profileImg from './images/bwbg.gif'
import './timesThem.css';

export default function Profile() {
    return(
        <div className='timesProfile flexColumn'>
            <img className="image" src={profileImg} alt='Me'/>
            <div className='summary'>
                <p><label className='theFirst'>A</label> full-stack developer keen to learn new skills and collaborate with others. A firm believer in discipline and self-driven process in learning. working well in specialist teams in exciting and continually developing environments. I am exposed to multicultural points of view integrated with a sociable and tactful personality, always enjoying the challenge of working under pressure either independently or as a member of a team within an agile team.</p>
                <p>Started coding for fun and now I am more serious </p>
            </div>
        </div>
    );
}
