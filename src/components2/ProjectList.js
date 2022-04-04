import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  top: 210px;
`;

export default function ProjectList() {
  return (
    <Container ref={listWrapRef}>
      {PROJECTS.map(({ subject, period, summary, details }, idx) => {
        return (
          <ProjectWrap key={idx} className="project" data-projectindex={idx}>
            <Project idx={idx}>
              <div>Img</div>
              <h1>subject: {subject}</h1>
              <div>period: {period}</div>
              <div>summary: {summary}</div>
              {details.map((detail, idx) => (
                <li key={idx} style={{ listStyle: 'none' }}>
                  {detail}
                </li>
              ))}
            </Project>
          </ProjectWrap>
        );
      })}
    </Container>
  );
}
