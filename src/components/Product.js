import { React, useState } from 'react';
import styled from "styled-components";
import { productInfo } from "../data";
import { productImages } from '../data';

const WrapperStyles = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  margin-top: 50px;
  /* margin-left: 10vh;
  margin-right: 10vh; */
  div {
    flex: 1 1 0;
    text-align: center;
  }
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const InfoDivStyles = styled.div`
  .itemsDiv {
    text-align: left;
    margin-bottom: 20px;
  }
  .company {
    color: var(--orange);
    font-size: 15px;
    font-weight: bold;
    margin: 0;
  }
  .name {
    font-size: 50px;
    font-weight: bold;
    margin: 0;
  }
  .description {
    font-size: 20px;
    margin: 0;
    color: var(--darkGreyishBlue);
    line-height: 30px;
  }
  .price {
    font-size: 30px;
    font-weight: bolder;
    margin: 0;
  }
  .discount {
    font-size: 25px;
    text-decoration: line-through;
    color: var(--darkGreyishBlue);
    margin: 0;
  }
  @media only screen and (max-width: 1000px) {
    .itemsDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const ImageDivStyles = styled.div`
  .smallImageDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .bigImage {
    width: auto;
    height: 500px;
    border-radius: 10px;
    cursor: pointer;
  }
  .smallImage {
    width: auto;
    height: 117px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    .smallImageDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .bigImage {
      width: auto;
      height: 300px;
      border-radius: 10px;
      cursor: pointer;
    }
    .smallImage {
      width: auto;
      height: 117px;
      margin: 5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

const InputStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  width: fit-content;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  .inputButton {
    background: var(--greyishBlue);
    border: none;
    width: 50px;
    color: var(--orange);
    font-size: 30px;
    border-radius: 2px;
    cursor: pointer;
  }
  label {
    background: var(--greyishBlue);
    border: none;
    width: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .cartInput {
    background: var(--orange);
    color: var(--lightGreyishBlue);
    border: none;
    border-radius: 2px;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    height: 20px;
  }

`;

export default function Product() {
  const [inputStateM, setStateInputM] = useState('+');
  const [inputStateS, setStateInputS] = useState('-');
  const [cartInput, setCartInput] = useState('Add to Cart');

  return(
    <>
      <WrapperStyles>
          <ImageDivStyles>
            {productImages.map(img => (
              <div key={img}>
                <img src={img.imageOne} key={img.imageOne} alt="coolShoes" className="bigImage"/>
              </div>
            ))}
            {productImages.map(img => (
              <div key={img} className="smallImageDiv">
                <img src={img.imageOne} key={img.imageOne} alt="coolShoes" className="smallImage"/>
                <img src={img.imageTwo} key={img.imageTwo} alt="coolShoes" className="smallImage"/>
                <img src={img.imageThree} key={img.imageThree} alt="coolShoes" className="smallImage"/>
                <img src={img.imageFour} key={img.imageFour} alt="coolShoes" className="smallImage"/>
            </div>
            ))}
          </ImageDivStyles>
          <InfoDivStyles>
            {productInfo.map(info => (
              <div key={info} className="itemsDiv">
                  <p key={info.company} className="company">{info.company}</p>
                  <p key={info.name} className="name">{info.name} </p>
                  <p key={info.description} className="description">{info.description}</p>
                  <p key={info.price} className="price">{info.price}</p>
                  <p key={info.discountPrice} className="discount">{info.discountPrice}</p>
              </div>
            ))}
            <InputStyles>
              <input type="button" id="button" value={inputStateM} className="inputButton"></input>
              <label htmlFor ="button">1</label>
              <input type="button" id="button" value={inputStateS} className="inputButton"></input>
              <input type="submit" id="submit" value={cartInput} className="cartInput"></input>
            </InputStyles>
          </InfoDivStyles> 
      </WrapperStyles>
    </>
  )
}