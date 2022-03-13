import React from 'react';
import Styled from 'styled-components';
import Experiences from '../components2/Experiences';
import Header from '../components2/Header';
import Projects from '../components2/projects/Projects2';
import Skills from '../components2/Skills';
import TopSection from '../components2/TopSection';

export default function PageV2() {
  return (
    <GlobalWidth>
      <HeaderWrap className="header-wrap">
        <Header />
      </HeaderWrap>
      <BodyWrap>
        <TopSection />
        <Experiences />
        <Skills />
        <h1>Project/ Activity/ Education</h1>
        <Projects />
      </BodyWrap>
    </GlobalWidth>
  );
}

const HeaderWrap = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
const BodyWrap = Styled.div`
  top: 200px;
  position: relative;
  @media (min-width: 1000px) {
    top: 150px;

  }
`;
const GlobalWidth = Styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background: #f8f8f8;
`;
