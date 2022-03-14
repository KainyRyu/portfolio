import React from 'react';
import styled from 'styled-components';
import { SUMMARY } from '../lib/contents';
import Main from '../assets/bwbg.gif';

export default function TopSection() {
  return (
    <Section>
      <ImgCover></ImgCover>
      <MainImg src={Main} alt="Kainy" />
      <Summary>{SUMMARY}</Summary>
    </Section>
  );
}
const Section = styled.div`
  margin: 10px 5px;
  display: flex;
  flex-flow: column;

  @media (min-width: 600px) {
    justify-content: space-between;
    flex-flow: row;
  }
`;

const ImgCover = styled.div`
  overflow: hidden;
`;
const MainImg = styled.img`
  object-fit: cover;
  border: 1px solid black;
  height: auto;
  @media (min-width: 600px) {
    width: 60%;
    height: auto;
  }
`;

const Summary = styled.div`
  font-size: 1em;
  text-align: justify;
  padding: 1.5%;
  @media (min-width: 600px) {
    width: 37%;
  }
`;
