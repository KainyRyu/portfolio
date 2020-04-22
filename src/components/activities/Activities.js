import React from 'react';
import './Activities.css';

export default function Activities () {
    return(
        <div className="activities">
            <h1>Activities</h1>
            <div className="activities-subject activity_first">
                <h3> Hackathon </h3>
                    Participated in 'UK vs COVID-19' Hackathon during the quarantine period; more about the project
                    <a 
                        href="#project-fourth"
                        rel="noopener noreferrer"
                        target="_blank"
                    > tell my GP</a>
                    , and you'll see more on the
                    <a 
                        href="https://medium.com/ukvscovidhack/tell-my-gp-63de96231e38" 
                        rel="noopener noreferrer"
                        target="_blank"
                    > Medium post
                    </a>
            </div>
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
            <div className="activities-subject activity_third">
                <h3> Running Workshops </h3>
                Kodiri : Running a 
                <a 
                    href="https://youtu.be/GAkdWTmPw9Q" 
                    rel="noopener noreferrer"
                    target="_blank"
                > live streaming workshops 
                </a> 
                about react advanced skills.
                </div>
        </div>
    )
}