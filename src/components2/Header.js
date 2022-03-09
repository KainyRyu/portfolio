import React from 'react';
import styled from 'styled-components';
import { gmtToday } from '../lib/helper';
import logo from '/assets/kainylogo.svg';
import github from '/assets/logos/github.png';
import gmail from '/assets/logos/gmail.png';
import linkedin from '/assets/logos/linkedin.png';

export default function Header() {
  const { day, date, month, year } = gmtToday();
  return (
    <div>
      <Top>
        <TopBox>"Front-End Developer"</TopBox>
        <div>
          <img className="logo" src={logo} alt="Kainy Ryu" />
        </div>
        <TopBox>
          <a href="https://github.com/KainyRyu" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={github} alt="github" />: GitHub
          </a>
          <a href="https://www.linkedin.com/in/kainyryu/" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={linkedin} alt="linkedin" />: LinkedIn
          </a>
          <a href="mailto:kainy2109@gmail.com" rel="noopener noreferrer" target="_blank">
            <img className="contact-logo" src={gmail} alt="gmail" />: Contact
          </a>
        </TopBox>
      </Top>
      <div>
        <h4>
          <span>London</span>
          <span>
            <span className="utc-time">
              <span>{day} </span>
              <span> {date} </span>
              <span> {month} </span>
              <span> {year}</span>
            </span>
          </span>
        </h4>
      </div>
    </div>
  );
}

const Top = styled.div`
  display: flex;
`;

const TopBox = styled.div`
  border: 1px solid black;
`;
