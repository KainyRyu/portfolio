import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';
import Projects from '../components2/Projects';
import Experiences from '../components2/Experiences';
import Header from '../components2/Header';
import Skills from '../components2/Skills';
import TopSection from '../components2/TopSection';

export default function PageV2() {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <GlobalWidth>
      <HeaderWrap className="header-wrap">
        <Header />
      </HeaderWrap>
      <Routes>
        <Route
          path="/"
          element={
            <BodyWrap>
              <TopSection />
              <Experiences />
              <Skills />
              <h1>Project/ Activity/ Education</h1>
              <Projects />
            </BodyWrap>
          }
        />
        <Route path=":projects" element={<Projects />} />
      </Routes>
    </GlobalWidth>
  );
}

const HeaderWrap = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: #f8f8f8;
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
