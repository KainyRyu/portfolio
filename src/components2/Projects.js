import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../lib/contents';

const projectList = document.querySelectorAll('.project');
export default function Project2() {
  const [refList, setRefList] = useState(0);
  const [ioIdx, setIoIdx] = useState(0);
  const listWrapRef = useRef(null);
  const listElems = listWrapRef.current && listWrapRef?.current.children;

  const io = new IntersectionObserver((entries, observer) => {
    setIoIdx(entries[0].target.dataset.index);
  });
  console.log(ioIdx);

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

  useEffect(() => {
    refList &&
      refList.map((item) => {
        const boundingRect = item.getBoundingClientRect();
        if (boundingRect.top > window.innerHeight * 0.1) {
          window.addEventListener('scroll', () => {
            console.log({ ioIdx, boundingRect: boundingRect.top });
          });
        }
      });
  }, [refList, ioIdx]);

  return (
    <ProjectSection>
      <ProejctListWrap ref={listWrapRef}>
        {PROJECTS.map(({ subject, period, summary, details }, idx) => {
          return (
            <ProjectWrap key={idx} className="project" data-index={idx}>
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
      </ProejctListWrap>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  // text-align: center;
  margin-top: 220px;
  overflow: hidden;
  box-sizing: border-box;
  padding: 5px;
  @media (min-width: 600px) {
  }
`;

const ProejctListWrap = styled.div`
  border: red 1px solid;
  top: 210px;
`;

const ProjectWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 70vh;
  border-bottom: ${(props) => props['data-index']}px solid black;
`;

const Project = styled.div`
  ${(props) => (props.idx % 2 === 0 ? 'left' : 'right')}: -10%;
  position: absolute;
  white-space: nowrap;
  border: blue 1px dotted;

  transition: 0.5s;
  transform: translateX(${(props) => (props.idx % 2 === 0 ? '25' : '-25')}%);
  @media (min-width: 1000px) {
    // max-width: 500%;
  }
`;

const DetailList = styled.li``;
