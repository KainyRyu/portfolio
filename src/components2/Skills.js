import React from 'react';
import styled from 'styled-components';
import { HIGHLIGHT_SKILLS } from '../lib/contents';

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <ArrayOfStacks>
        {HIGHLIGHT_SKILLS['work'].map((stack, idx) => (
          <Skill key={idx}>{stack}</Skill>
        ))}
      </ArrayOfStacks>
    </div>
  );
}

const ArrayOfStacks = styled.div`
  text-align: center;
  font-size: 1.5em;
  padding: 5px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.h1`
  letter-spacing: 1px;
  margin: 10px;
  background-color: lightgray;
`;
