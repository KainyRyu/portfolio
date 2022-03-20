import React from 'react';
import styled from 'styled-components';
import { SUMMARY } from '../lib/contents';
import Main from '../assets/bwbg.gif';

export default function TopSection() {
  return (
    <Section>
      <MainImg src={Main} alt="Kainy" />
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

const MainImg = styled.img`
  overflow: hidden;
  object-fit: cover;
  border: 1px solid black;
  height: auto;
  width: 100%;
  // margin: 0 auto;

  @media (min-width: 650px) {
    width: 60%;
    height: auto;
  }
`;

const Summary = styled.div`
  font-size: 1.3em;
  text-align: justify;

  @media (min-width: 650px) {
    width: 37%;
    margin-right: 5px;
  }
`;
