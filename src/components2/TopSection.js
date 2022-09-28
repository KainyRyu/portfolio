import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SUMMARY } from '../lib/contents';
import Main from '../assets/bwbg.gif';
import useGlobalContext from '../context/useGlobalContext';

export default function TopSection() {
  const { scrollPosition } = useGlobalContext();

  const imageScale = 1.2 - scrollPosition / 500;

  return (
    <Section>
      <ImgCover>
        <MainImg
          src={Main}
          alt="Kainy"
          style={{ transform: `scale(${imageScale > 1 ? imageScale : 1})` }}
        />
      </ImgCover>
      <Summary>{SUMMARY}</Summary>
    </Section>
  );
}
const Section = styled.div`
  display: flex;
  flex-flow: column;

  padding: 10px;
  @media (min-width: 650px) {
    justify-content: space-between;
    flex-flow: row;
  }
`;
const ImgCover = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid black;
  max-height: 420px;
  width: 100%;
  // margin: 0 auto;
  object-fit: cover;

  @media (min-width: 650px) {
    width: 60%;
    height: auto;
  }
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // border: 1px solid black;
  transform: scale(1.5);
  object-fit: cover;
`;

const Summary = styled.div`
  margin-top: 10px;
  font-size: 1.3em;
  text-align: justify;

  @media (min-width: 650px) {
    width: 37%;
    margin-right: 5px;
  }
`;
