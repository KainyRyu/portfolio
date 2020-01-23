import React from "react";
import project1 from './images/project1.png';

import html from "./images/logos/html.svg";
import css from "./images/logos/css.svg";
import javascript from "./images/logos/js.png";
import node from "./images/logos/node.png";
import react from "./images/logos/react.png";
import mongoDB from "./images/logos/mongo.png";
import expressJS from "./images/logos/express.png";

import "./projects.css";
import "./frontend/App.css";

export default function Skills({ title }) {
  return (
    <div>
        <div className="card">
            <div className='flexWrap projects'>
                <a href='https://nadinefresko.github.io/group_project/' target='_blank' rel='noopener noreferrer'>
                    <img className='project' src={project1} alt='Recycling project' />
                </a>
            </div>
            <div className='flexColumn skills'>
                <Icon title={html} name='HTML' />
                <Icon title={css} name='CSS' />
                <Icon title={javascript} name='javascript' />
                <Icon title={react} name='ReactJS' />
                <Icon title={node} name='nodeJS' />
                <Icon title={expressJS} name='' />
                <Icon title={mongoDB} name='mongoDB' />
            </div>
        </div>
    </div>
  );
}

function Icon({ title, name }) {
  return (
    <div className="skillContainer">
      <img className="icon" src={title} alt={name} />
      <h3 className="skillname inline">{name}</h3>
    </div>
  );
}
