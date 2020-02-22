import React from 'react';
import './Activities.css';

export default function Activities () {
    return(
        <div className="activities">
            <h1>Activities</h1>
            <div className="activities-subject activity_first">
                <h3> Coaching </h3>
                    codebar :  Pairing with beginner coders helping with HTML, CSS and Javascript and also learning from the experienced developers.
            </div>
            <div className="activities-subject activity_second">
                <h3> Event Organiser </h3>
                Meetups :   Running workshops for women who are interested in coding and would like to become a developer. <br /> 
                / <br />
                Kodiri : Volunteering as a co-organiser running meetup events and helping people with the platform and HTML, CSS and JS.
            </div>
        </div>
    )
}