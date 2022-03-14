import React from 'react';
import styled from 'styled-components';
import { gmtToday } from '../lib/helper';

import logo from '../assets/kainylogo.svg';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';
import linkedin from '../assets/logos/linkedin.png';

export default function Header() {
  const { day, date, month, year } = gmtToday();
  return (
    <HeaderWrap className="header-component">
      {/* <Top>
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
        <CurrentTime>
          <span>London</span>
          <span>
            <span className="utc-time">
              <span>{day} </span>
              <span> {date} </span>
              <span> {month} </span>
              <span> {year}</span>
            </span>
          </span>
        </CurrentTime>
      </div> */}
    </HeaderWrap>
  );
}

const HeaderWrap = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  padding: 5px;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  background: #f8f8f8;
  z-index: 10;
  height: 210px;
  border: 1px solid black;

  @media (min-width: 1000px) {
    max-height: 150px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    flex-flow: row;
  }
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: solid 1px black;

  @media (min-width: 1000px) {
    width: 200px;
    border: 1px solid black;
    flex-flow: column;
  }
`;

const CurrentTime = styled.div`
  border-top: solid 1px black;
  border-bottom: solid 2px black;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
`;
