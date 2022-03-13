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
  margin: 10px 5px;
  display: flex;
  flex-flow: column;

  @media (min-width: 600px) {
    justify-content: space-between;
    flex-flow: row;
  }
`;
const MainImg = styled.img`
  border: 1px solid black;
  height: auto;
  @media (min-width: 600px) {
    width: 60%;
  }
`;

const Summary = styled.div`
  @media (min-width: 600px) {
    width: 37%;
  }
`;
