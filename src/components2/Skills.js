import React from 'react';
import styled from 'styled-components';
import { HIGHLIGHT_SKILLS } from '../lib/contents';

export default function Skills() {
  return (
    <div>
      <h1>Skills</h1>
      <div>
        <span>work </span>
        <span style={{ backgroundColor: 'lightgray' }}>personal </span>
      </div>
      <ArrayOfStacks>
        {HIGHLIGHT_SKILLS['skills'].map((stack, idx) => {
          const personalStack = HIGHLIGHT_SKILLS['personal'].includes(stack);
          return (
            <Skill key={idx} personal={personalStack}>
              {stack}
            </Skill>
          );
        })}
      </ArrayOfStacks>
    </div>
  );
}

const ArrayOfStacks = styled.div`
  text-align: center;
  font-size: 1.5em;
  padding: 5px;
  width: 90%;
  overflow-wrap: break-word;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
`;

const Skill = styled.h1`
  display: inline;
  letter-spacing: 1px;
  margin: 10px;
  background-color: ${(props) => (props.personal ? 'lightgray' : 'none')};
`;
