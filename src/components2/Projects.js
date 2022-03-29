import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../lib/contents';

import JoaraMobile from '../assets/projects/mw_mobile.png';
import PreJoara from '../assets/projects/pre_joara.png';
import DesktopJoara from '../assets/projects/mw_renew.png';
import JoaraWTOld from '../assets/projects/webtoon_old.png';
import JoaraWTRenew from '../assets/projects/webtoon_new.png';

export default function Project2() {
  const mainTitleRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [pageYOffset, setPageYOffset] = useState(0);
  const [refList, setRefList] = useState(0);
  const [ioIdx, setIoIdx] = useState(0);
  const listWrapRef = useRef(null);
  const listElems = listWrapRef.current && listWrapRef?.current.children;

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

  const observer = new IntersectionObserver((entries) => {
    const item = entries[0];
    console.log(item.target.dataset.projectindex, item.boundingClientRect.top);
    console.log(entries);
    // entries.forEach((entry) => {
    //   window.addEventListener('scroll', () => {
    //     // console.log(entry.target.dataset.projectindex, entry);
    //     console.log(entry.target.dataset.projectindex, entry.boundingClientRect.top);

    //     // console.log(
    //     //   window.innerHeight * 0.9,
    //     //   entry.boundingClientRect.top, // boudingClientRect.top <- this value is absolute
    //     //   window.innerHeight * 0.2,
    //     //   entry.boundingClientRect.top,
    //     //   entry.target.dataset.projectindex,
    //     // );
    //     if (entry.isIntersecting) {
    //       // console.log(entry.isIntersecting, entry.target.dataset.projectindex);
    //       // console.log(entry.target.dataset.projectindex, entry.boundingClientRect.top);
    //       // console.log('children --- ', entry.target.children[0].children);
    //     }
    //   });
    // });
  });
  const onScroll = () => {
    setPosition(window.scrollY);
    setPageYOffset(document.body.offsetHeight);
  };
  // console.log({ scrollY: position, pageYOffset });
  // console.log({ outerHeight: window.outerHeight, innerHeight: window.innerHeight });
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // console.log({ position, pageYOffset });

  useEffect(() => {
    refList &&
      refList.map((item, idx) => {
        window.addEventListener('scroll', () => {
          // console.log({ ioIdx, boundingRect: boundingRect.top });
          observer.observe(refList[idx]);
        });
        const boundingRect = item.getBoundingClientRect();
        if (boundingRect.top > window.innerHeight * 0.1) {
          window.addEventListener('scroll', () => {
            // console.log({ ioIdx, boundingRect: boundingRect.top });
          });
        }

        return () => window.removeEventListener('scroll');
      });
  }, [refList, ioIdx]);

  return (
    <ProjectSection>
      <ScrollImgs>
        <ImgWrap>
          <img
            className="scroll-img"
            src={JoaraWTOld}
            alt="old webtoon"
            style={{ height: '600px' }}
          />
        </ImgWrap>
        <ImgWrap>
          <img
            className="scroll-img"
            src={JoaraWTRenew}
            alt="new webtoon"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap>
          <img
            className="scroll-img"
            src={PreJoara}
            alt="main mobile"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap>
          <img
            className="scroll-img"
            src={JoaraMobile}
            alt="renewed mobile"
            style={{
              height: '600px',
            }}
          />
        </ImgWrap>
        <ImgWrap>
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
