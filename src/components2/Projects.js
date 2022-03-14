import React, { useEffect, useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import useIntersect from '../hooks/useIntersect';
import { PROJECTS } from '../lib/contents';

const projectList = document.querySelectorAll('.project');
export default function Project2() {
  const [refList, setRefList] = useState(0);
  const listWrapRef = useRef(null);
  const listElems = listWrapRef.current && listWrapRef?.current.children;

  const io = new IntersectionObserver((entries, observer) => {
    const target = entries[0].target;
    const i = entries[0].target.dataset.index;
    console.log(entries[0]);
  });

  useEffect(() => {
    listWrapRef.current && setRefList([...listWrapRef?.current.children]);
  }, [listElems]);

  useEffect(() => {
    console.log('refList--', refList);
    refList &&
      refList.forEach((element) => {
        io.observe(element);
      });
  }, [refList]);

  const getElems = (idx) => {
    const elem = listWrapRef[idx];
    elem && io.observe(elem);
  };

  return (
    <ProjectSection>
      <ProejctListWrap ref={listWrapRef}>
        {PROJECTS.map(({ subject, period, summary, details }, idx) => {
          listWrapRef && getElems(idx);
          return (
            <ProjectWrap key={idx} className="project" data-index={idx}>
              <Project idx={idx}>
                <div>Img</div>
                <h2>subject: {subject}</h2>
                <div>period: {period}</div>
                <div>summary: {summary}</div>
                {details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </Project>
            </ProjectWrap>
          );
        })}
      </ProejctListWrap>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  text-align: center;
  margin-top: 220px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  @media (min-width: 600px) {
  }
`;

const ProejctListWrap = styled.div`
  border: red 1px solid;
  position: relative;
`;

const ProjectWrap = styled.div`
  width: 100%;
  border-bottom: ${(props) => props['data-index']}px solid black;
`;

const Project = styled.div`
  left: ${(props) => (props.idx % 2 === 0 ? 2 : 50)}%;

  height: 70vh;
  @media (min-width: 1000px) {
    max-width: 50%;
  }
`;
