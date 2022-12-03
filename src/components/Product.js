import React from 'react';
import styled from "styled-components";
import AddToCartInfo from './AddToCartInfo';
import Carousel from './Carousel';

const WrapperStyles = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  margin-top: 5em;
  div {
    flex: 1 1 0;
    text-align: center;
  }
  @media only screen and (max-width: 790px) {
    display: block;
    height: 100%;
    margin-top: 2em;
    div {
      flex: 1 1 0;
      text-align: center;
    }
  }
`;

export default function Product() {
  return (
    <>
      <WrapperStyles>
        <Carousel />
        <AddToCartInfo />
      </WrapperStyles>
    </>
  )
}