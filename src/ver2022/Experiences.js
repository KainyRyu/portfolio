import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EXPERIENCE } from '../lib/contents';

export default function Experiences() {
  const innerWidth = window.innerWidth < 1000 ? window.innerWidth : 1000;
  const config = (innerWidth * 60) / 100;
  const [textOffset, setTextOffset] = useState((innerWidth * 60) / 100);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log(config);
      setTextOffset(config - window.scrollY);
    });
  }, []);
  return (
    <Section>
      <SectionTitle textOffset={textOffset}>Experience</SectionTitle>
      {EXPERIENCE.map(({ role, company, url, location, activities }, idx) => (
        <Margin5 key={idx}>
          <h2>{role}</h2>
          <Location>
            {company} {location}
          </Location>
          <div>
            {activities.map((activity, idx) => (
              <Activity key={idx}>{activity}</Activity>
            ))}
          </div>
        </Margin5>
      ))}
    </Section>
  );
}

const Section = styled.div`
  padding: 10px;
  border-top: solid black 1px;
  position: relative;
  overflow: hidden;
`;
const SectionTitle = styled.div`
  font-size: 5em;
  position: absolute;
  left: ${(props) => props.textOffset}px;
  white-space: nowrap;
  color: white;
  text-shadow: -1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;
  opacity: 0.5;
`;

const Margin5 = styled.div`
  margin: 5px;
  position: relative;
`;

const Location = styled.h2`
  opacity: 0.7;

  margin: 0 0 10px 0;
  top: 40px;
`;

const Activity = styled.div`
  font-size: 1.5em;
`;
