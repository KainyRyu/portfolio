import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ACTIVITIES } from '../lib/contents';

export default function Educations() {
  return (
    <ActivitiesWrap>
      <h1>Activities</h1>
      {ACTIVITIES.map((activity, idx) => (
        <ActivityWrap key={idx}>
          <ActivityTitle>
            {activity.link ? (
              <a href={activity.link} target="_blank" rel="noreferrer">
                {activity.subject}
              </a>
            ) : (
              <span>
                {activity.subject}
                {/* {`  (${activity.location})`} */}
              </span>
            )}
            <span>{`  (${activity.location})`}</span>
          </ActivityTitle>
          <Summary>
            {activity.summary.split('*').map((row, idx) => (
              <div key={idx}>- {row}</div>
            ))}
          </Summary>
        </ActivityWrap>
      ))}
    </ActivitiesWrap>
  );
}

const ActivitiesWrap = styled.div`
  margin: 30px 5%;

  @media (min-width: 650px) {
    margin: 30px auto;
    max-width: 600px;
  }
`;

const ActivityWrap = styled.div`
  @media (min-width: 650px) {
    display: flex;
  }
`;

const ActivityTitle = styled.h3`
  @media (min-width: 650px) {
    flex: 1;
    display: flex;
    flex-flow: column;
  }
`;

const Summary = styled.h3`
  font-weight: 400;
  @media (min-width: 650px) {
    flex: 2;
    margin: 20px;
  }
`;
