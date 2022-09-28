import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../lib/contents';

import JoaraMobile from '../assets/projects/mw_mobile.png';
import PreJoara from '../assets/projects/pre_joara.png';
import DesktopJoara from '../assets/projects/mw_renew.png';
import JoaraWTOld from '../assets/projects/webtoon_old.png';
import JoaraWTRenew from '../assets/projects/webtoon_new.png';
import { sceneInfo } from '../lib/sceneInfo';

export default function Project2() {
  const listWrapRef = useRef(null);

  const action = {
    moveSubject(elem) {
      if (elem) {
        // Move Subject
        elem.style.transform = `translateX(${window.innerWidth}px)`;
      }
    },
    goBack(elem) {
      if (elem) {
        // Move back Subject
        elem.style.transform = `translateX(-${window.innerWidth}px)`;
      }
    },
  };

  const setLayout = () => {
    sceneInfo.forEach((scene, idx) => {
      if (sceneInfo[idx].type === 'sticky') {
        sceneInfo[idx].scrollHeight = sceneInfo[idx].heightNum * window.innerHeight;
      } else if (sceneInfo[idx].type === 'normal') {
        sceneInfo[idx].scrollHeight = sceneInfo[idx].objs.container.offsetHeight;
      }
      sceneInfo[idx].objs.container.style.height = `${sceneInfo[idx].scrollHeight}px`;
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setLayout);
    window.addEventListener('load', setLayout);

    return () => {
      window.removeEventListener('resize', setLayout);
      window.removeEventListener('load', setLayout);
    };
  }, []);

  return (
    <ProjectSection>
      <ScrollImgs>
        <ImgWrap className="scroll-img0">
          <img
            className="scroll-img"
            src={JoaraWTOld}
            alt="old webtoon"
            style={{ height: '600px' }}
          />
        </ImgWrap>
        <ImgWrap className="scroll-img1">
          <img
            className="scroll-img"
            src={JoaraWTRenew}
            alt="new webtoon"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap className="scroll-img2">
          <img
            className="scroll-img"
            src={PreJoara}
            alt="main mobile"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap className="scroll-img3">
          <img
            className="scroll-img"
            src={JoaraMobile}
            alt="renewed mobile"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap className="scroll-img4">
          <img
            className="scroll-img"
            src={DesktopJoara}
            alt="renewed mobile"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
      </ScrollImgs>
      <ProejctListWrap ref={listWrapRef}>
        {PROJECTS.map(({ subject, period, summary, details }, idx) => {
          return (
            <ProjectWrap key={idx} className={`project-wrap project${idx}`} data-projectindex={idx}>
              <Project idx={idx}>
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

const ProjectSection = styled.section`
  margin-top: 50px;
  box-sizing: border-box;
  border: red 1px solid;
  padding: 5px;
  overflow: hidden;
  @media (min-width: 600px) {
  }
`;

const ProejctListWrap = styled.div`
  top: 210px;
`;

const ProjectWrap = styled.div`
  width: 100%;
  height: 80vh;
  border-bottom: ${(props) => props['data-projectindex']}px solid black;
`;

const Project = styled.div`
  ${(props) => (props.idx % 2 === 0 ? 'left' : 'right')}: -10%;
  white-space: nowrap;
  border: blue 1px dotted;
  transform: translateX(${(props) => (props.idx % 2 === 0 ? '25' : '-25')}%);
  @media (min-width: 1000px) {
    // max-width: 500%;
  }
`;

const ScrollImgs = styled.div`
  position: sticky;
  top: 200px;
  height: 80vh;
`;

const ImgWrap = styled.div`
  position: absolute;
  // opacity: 0;
`;
