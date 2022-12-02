import styled from "styled-components";
import { useState } from 'react';
import { productInfo } from "../data";

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
  @media only screen and (max-width: 790px) {
    display: block;
    align-items: center;
    justify-content: center;
    text-align: left;
    .itemsDiv {
      display: block;
      align-items: center;
      justify-content: flex-start;
      text-align: left;
      margin-left: 10px;
    }
    .name {
      font-size: 30px;
      font-weight: bold;
      margin: 0;
    } 
    .description {
      font-size: 17px;
      margin: 0;
      color: var(--darkGreyishBlue);
      line-height: 30px;
    }
    .price {
      font-size: 25px;
      font-weight: bolder;
      margin: 0;
    }
    .discount {
      font-size: 25px;
      text-decoration: line-through;
      color: var(--darkGreyishBlue);
      margin: 0;
    }
  }
`;

const InputStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  max-height: 40px;
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
  .inputDiv {
      display: flex;
  }
  @media only screen and (max-width: 790px) {
    display: block;
    height: 40px;
    margin: 0 auto;
    .inputDiv {
      display: flex;
    }
  }
`;

export default function AddToCartInfo() {
  const [inputStateM, setStateInputM] = useState('+');
  const [inputStateS, setStateInputS] = useState('-');
  const [cartInput, setCartInput] = useState('Add to Cart');

  return (
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
        <div className="inputDiv">
          <input type="button" id="button" value={inputStateM} className="inputButton"></input>
          <label htmlFor ="button">1</label>
          <input type="button" id="button" value={inputStateS} className="inputButton"></input>
          <input type="submit" id="submit" value={cartInput} className="cartInput"></input>
        </div>
      </InputStyles>
    </InfoDivStyles> 
  )
}