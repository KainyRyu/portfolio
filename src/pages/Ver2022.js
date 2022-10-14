import React, { useEffect } from 'react';

import Styled from 'styled-components';
import Projects from '../ver2022/Projects';
import Experiences from '../ver2022/Experiences';
import Header from '../ver2022/Header';
import Skills from '../ver2022/Skills';
import Profile from '../ver2022/Profile';
import Educations from '../ver2022/Educations';
import Footer from '../ver2022/Footer';
import useGlobalContext from '../context/useGlobalContext';
import Gnb from '../ver2022/Gnb';

export default function Ver2022() {
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
      <Gnb />

      <Header />

      {/* <BodyWrap headerHeight={headerHeight}> */}

      <Profile />
      <Experiences />
      <Skills />
      <Projects />
      <Educations />
      {/* 맥북, 아이폰 손 나오면서 스크롤에 따라서 텍스트, 화면 바뀌기 */}
      <Footer />
      <button onClick={onClickToTheTop}></button>
    </GlobalWidth>
  );
}

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
