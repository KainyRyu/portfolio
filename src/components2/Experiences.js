import React from 'react';
import styled from 'styled-components';
import { EXPERIENCE } from '../lib/contents';

export default function Experiences() {
  return EXPERIENCE.map(({ role, company, url, location, activities }) => {
    console.log(activities);
    return (
      <Margin5>
        <h2>{role}</h2>
        <div>{company}</div>
        <div>{location}</div>
        <div>
          {activities.map((activity, idx) => (
            <div key={idx}>{activity}</div>
          ))}
        </div>
      </Margin5>
    );
  });
}

const Margin5 = styled.div`
  margin: 5px;
`;
