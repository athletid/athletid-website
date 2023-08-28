'use client'
import React from 'react';
import styled from "styled-components";


const Container = styled.div`
  width: 300px;
  height: 300px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left:auto;
  margin-right: auto;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;
`;

const Spinner = styled.div`
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid black;
  border-right: 4px solid transparent;
  border-radius: 100%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;
`;

const CircleSpinner = () => {
    return (
        <Container>
            <Spinner/>
        </Container>

    );
};

export default CircleSpinner;