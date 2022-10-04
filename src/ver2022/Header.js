import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gmtToday } from '../lib/helper';

import logo from '../assets/kainylogo.svg';
import github from '../assets/logos/github.png';
import gmail from '../assets/logos/gmail.png';
import linkedin from '../assets/logos/linkedin.png';
import useGlobalContext from '../context/useGlobalContext';

export default function Header() {
  // const { setHeaderHeight } = useGlobalContext();
  const headerBottomRef = useRef(null);
  const [isMobileSize, setIsMobileSize] = useState(true);
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
    <HeaderWrap className="header-component">
      <Top>
        <TopBox style={{ textAlign: 'center' }}>
          <h3 style={{ margin: '10px auto' }}>"Front-End Developer"</h3>
        </TopBox>
        <Logo src={logo} alt="Kainy Ryu" />
        <TopBox>
          <ATag href="https://github.com/KainyRyu" rel="noopener noreferrer" target="_blank">
            <ContactLogo src={github} alt="github" />: GitHub
          </ATag>
          <ATag
            href="https://www.linkedin.com/in/kainyryu/"
            rel="noopener noreferrer"
            target="_blank">
            <ContactLogo src={linkedin} alt="linkedin" />: LinkedIn
          </ATag>
          <ATag href="mailto:kainy2109@gmail.com" rel="noopener noreferrer" target="_blank">
            <ContactLogo src={gmail} alt="gmail" /> : Contact
          </ATag>
        </TopBox>
      </Top>
      <div className="current-time" ref={headerBottomRef}>
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
      </div>
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

  @media (min-width: 650px) {
    max-height: 160px;
  }
`;

const Top = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @media (min-width: 650px) {
    flex-flow: row;
  }
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-top: solid 1px black;

  @media (min-width: 650px) {
    align-items: center;
    width: 150px;
    border: 1px solid black;
    flex-flow: column;
  }
`;

const CurrentTime = styled.div`
  box-sizing: border-box;
  border-top: solid 1px black;
  border-bottom: solid 2px black;
  display: flex;
  justify-content: space-evenly;
  background-color: #f8f8f8;
  @media (min-width: 650px) {
    margin-top: 10px;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
`;

const ContactLogo = styled.img`
  margin-top: 2px;
  height: 20px;
  width: 20px;
`;

const ATag = styled.a`
  color: #222222;
  cursor: pointer;
  text-decoration: none;
`;
