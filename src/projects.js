import React from "react";
import html from "./images/logos/html.svg";
import css from "./images/logos/css.svg";
import javascript from "./images/logos/js.png";
import node from "./images/logos/node.png";
import react from "./images/logos/react.png";
import mongoDB from "./images/logos/mongo.png";
import "./App.css";

export default function Skill({ title }) {
  return (
    <div>
      <div className="card skill">
        <Icon title={html} name='HTML' />
        <Icon title={css} name='CSS' />
        <Icon title={javascript} name='javascript' />
        <Icon title={node} name='nodeJS' />
        <Icon title={react} name='ReactJS' />
        <Icon title={mongoDB} name='mongoDB' />
      </div>
    </div>
  );
}

function Icon({ title, name }) {
  return (
    <div className="container">
      <img className="icon" src={title} alt={name} />
      <h3 className="inline">{name}</h3>
    </div>
  );
}
