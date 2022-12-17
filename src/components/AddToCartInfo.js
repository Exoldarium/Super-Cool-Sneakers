import styled from "styled-components";
import { useState } from 'react';
import iconMinus from "../images/icon-minus.svg";
import iconPlus from '../images/icon-plus.svg';

const InfoDivStyles = styled.div`
  margin-right: 15px;
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
    font-size: 25px;
    margin: 0;
    text-decoration: line-through;
    color: var(--darkGreyishBlue);
  }
  .discount {
    font-size: 30px;
    font-weight: bolder;
    margin: 0;
  }
  @media only screen and (max-width: 790px) {
    margin: 0;
    /* padding-bottom: 70px; */
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
      color: var(--darkGreyishBlue);
      margin: 0;
      text-decoration: line-through;
    }
    .discount {
      font-size: 30px;
      font-weight: bolder;
      margin: 0;
    }
    .itemsDiv {
      text-align: left;
      padding: 10px;
      margin: 0;
    }
  }
`;

const InputStyles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: fit-content; */
  /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.2); */
  button {
    background: var(--greyishBlue);
    border: none;
    width: 50px;
    color: var(--orange);
    font-size: 30px;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .spanLabel {
    background: var(--greyishBlue);
    border: none;
    width: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .cartInput {
    display: block;
    height: 50px;
    width: auto;
    font-size: 20px;
    color: var(--lightGreyishBlue);
    background: var(--orange);
  }
  label {
    background: var(--orange);
    color: var(--lightGreyishBlue);
    border: none;
    border-radius: 2px;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 2px;
    cursor: pointer;
  }
  .inputDiv {
    display: flex;
  }
  @media only screen and (max-width: 790px) {
    display: block;
    /* height: 40px; */
    margin: 0 auto;
    .inputDiv {
      display: flex;
      justify-content: center;
    }
  }
`;

export default function AddToCartInfo(props) {
  const [isAmount, setAmount] = useState(1);

  // on click set new amount to be sent to parent component
  function handleAddProduct() {
    props.onClick(isAmount);
    setAmount(1);
  }

  // on button click increase amount
  function increaseAmountOnClick() {
    setAmount((previousAmount) => (previousAmount += 1));
  }

  // on button click decrease amount
  function decreaseAmountOnClick() {
    setAmount((previousAmount) => {
      if (previousAmount > 1) {
        return (previousAmount -= 1);
      } else {
        return (previousAmount = 1);
      }
    })
  }

  return (
    <InfoDivStyles>
        <div className="itemsDiv">
          <p className="company">{props.company}</p>
          <p className="name">{props.name}</p>
          <p className="description">{props.description}</p>
          <p className="price">{`$${props.price}`}</p>
          <p className="discount">{`$${props.currentPrice}`}</p>
        </div>
      <InputStyles>
        <div className="inputDiv">
          <button className="buttonMinus" onClick={decreaseAmountOnClick}>
            <img src={iconMinus} alt="displays button that decreases the product amount on click" />
          </button>
          <span className="spanLabel">{isAmount}</span>
          <button className="buttonPlus" onClick={increaseAmountOnClick}>
            <img src={iconPlus} alt="displays button that increases the product amount on click"/>
          </button>
          <button className="cartInput" onClick={handleAddProduct} value={isAmount}>Add to Cart</button>
        </div>
      </InputStyles>
    </InfoDivStyles> 
  )
}