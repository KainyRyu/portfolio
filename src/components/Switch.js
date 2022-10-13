import React from 'react';
import styled from 'styled-components';

export default function Switch() {
  return (
    <Container>
      <Checkbox type="checkbox" label="switch" />
      <Knob></Knob>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  border: solid 1px black;
  border-radius: 15px;
  background: grey;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Knob = styled.div`
  border: solid 1px black;
  border-radius: 35px;
  width: 25px;
  height: 25px;
  position: absolute;
  top: -1px;
  left: -1px;
  
  background: darkgray;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Checkbox = styled.input`
  //   opacity: 0;
  position: absolute;
`;
