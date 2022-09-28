import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Styled from 'styled-components';
import Projects from '../components2/Projects';
import Experiences from '../components2/Experiences';
import Header from '../components2/Header';
import Skills from '../components2/Skills';
import TopSection from '../components2/TopSection';
import Educations from '../components2/Educations';
import Footer from '../components2/Footer';
import useGlobalContext from '../context/useGlobalContext';

export default function PageV2() {
  const { headerHeight } = useGlobalContext();
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  const onClickToTheTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <GlobalWidth>
      <HeaderWrap className="header-wrap">{/* <Header /> */}</HeaderWrap>
      {/* <BodyWrap headerHeight={headerHeight}> */}
      <BodyWrap>
        <TopSection />
        <Experiences />
        <Skills />
        <Projects />
        <Educations />
        {/* 맥북, 아이폰 손 나오면서 스크롤에 따라서 텍스트, 화면 바뀌기 */}
        <Footer />
        <button onClick={onClickToTheTop}></button>
      </BodyWrap>
    </GlobalWidth>
  );
}

const HeaderWrap = Styled.div`
  position: relative;
`;
const BodyWrap = Styled.div`
  // top: ${(props) => props.headerHeight}px;
  position: relative;
  padding: 10px;
  @media (min-width: 650px) {
    top: 170px;
  }
`;
const GlobalWidth = Styled.div`
width: 100%;
  max-width: 1000px;

  margin: 0 auto;
  background: #f8f8f8;
`;
