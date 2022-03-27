import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SUMMARY } from '../lib/contents';
import Main from '../assets/bwbg.gif';

export default function TopSection() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosition(window.scrollY);
    });
  }, []);

  const imageScale = 1.2 - position / 500;

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
  overflow: hidden;
  border: 1px solid black;
  max-height: 432px;
  width: 100%;
  // margin: 0 auto;

  @media (min-width: 650px) {
    width: 60%;
    height: auto;
  }
`;

const MainImg = styled.img`
  transform: scale(1.5);
  object-fit: cover;
  height: auto;
  width: 100%;
`;

const Summary = styled.div`
  font-size: 1.3em;
  text-align: justify;

  @media (min-width: 650px) {
    width: 37%;
    margin-right: 5px;
  }
`;
