import React from 'react';
import styled from 'styled-components';

export default function Skills() {
  const WORK_TECH_STACK = ['HTML/ CSS/ JS', 'React', 'Redux', 'Git(Bitbucket, Jira)'];
  const PERSONAL_TECH_STACK = ['HTML/ CSS/ JS', 'React', 'TypeScript', 'React Query', 'Jest'];
  return (
    <div>
      <TechStacks>
        Work Tech Stack:{' '}
        {WORK_TECH_STACK.map((stack, idx) => (
          <Stack key={idx}>{stack}, </Stack>
        ))}
      </TechStacks>
      <TechStacks>
        Personal Tech Stack:{' '}
        {PERSONAL_TECH_STACK.map((stack, idx) => (
          <Stack key={idx}>{stack}, </Stack>
        ))}
      </TechStacks>
    </div>
  );
}

const TechStacks = styled.h1`
  border: 1px solid black;
  background: #bcbcbc;
  width: 99%;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
`;

const Stack = styled.span`
  margin: 0 10px;
`;
