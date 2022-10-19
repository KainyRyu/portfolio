import React from 'react';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.link_container}>
        <a href="#intro">About me</a>
        <div>
          <a href="#/">Contact me</a>
          <div>github</div>
          <div>Linkedin</div>
          <div>email</div>
        </div>

        <a href="#experiences">Experiences</a>
        <a href="#skills">Skills</a>
      </div>
      <div className={style.copywriter}>© Kainy Ryu Limited 2022</div>
    </div>
  );
}
