import React, { useRef, useState } from 'react';
import style from './Header.module.scss';
import { gmtToday } from '../../lib/helper';

import logo from 'assets/kainylogo.svg';
import github from 'assets/logos/github.png';
import gmail from 'assets/logos/gmail.png';
import linkedin from 'assets/logos/linkedin.png';

export default function Header() {
  // const { setHeaderHeight } = useGlobalContext();
  const headerBottomRef = useRef(null);
  const { day, date, month, year } = gmtToday();

  // useEffect(() => {
  //   setIsMobileSize(window.innerWidth < 601);
  //   setHeaderHeight(headerBottomRef.current.offsetHeight + headerBottomRef.current.offsetTop);
  //   window.addEventListener('resize', () => {
  //     setIsMobileSize(window.innerWidth < 601);
  //     setHeaderHeight(headerBottomRef.current.offsetHeight + headerBottomRef.current.offsetTop);
  //   });
  // }, [setHeaderHeight]);

  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.topbox} style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '10px auto' }}>"Front-End Developer"</h3>
        </div>
        <img className={style.logo} src={logo} alt="Kainy Ryu" />
        <div className={style.topbox}>
          <a
            className={style.link}
            href="https://github.com/KainyRyu"
            rel="noopener noreferrer"
            target="_blank">
            <img className={style.contact_logo} src={github} alt="github" />: GitHub
          </a>
          <a
            className={style.link}
            href="https://www.linkedin.com/in/kainyryu/"
            rel="noopener noreferrer"
            target="_blank">
            <img className={style.contact_logo} src={linkedin} alt="linkedin" />: LinkedIn
          </a>
          <a
            className={style.link}
            href="mailto:kainy2109@gmail.com"
            rel="noopener noreferrer"
            target="_blank">
            <img className={style.contact_logo} src={gmail} alt="gmail" /> : Contact
          </a>
        </div>
      </div>
      <div className="current-time" ref={headerBottomRef}>
        <div className={style.currentTime}>
          <span>London</span>
          <span>
            <span className="utc-time">
              <span>{day} </span>
              <span> {date} </span>
              <span> {month} </span>
              <span> {year}</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
