import { v4 as uuidv4 } from 'uuid';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import iconMinus from "../images/icon-minus.svg";
import iconPlus from '../images/icon-plus.svg';

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
    display: flex;
    flex-direction: column;
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
    display: none;
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
    height: 40px;
    margin: 0 auto;
    .inputDiv {
      display: flex;
    }
  }
`;

export default function AddToCartInfo(props) {
  // const { company, name, description, price, currentPrice, images } = product;
  const [isAmount, setAmount] = useState(1);
  // const [isProduct, setProduct] = useState(productCartInfo);
  // const cartArray = [];
  // const buttonMinus = document.querySelector('.buttonMinus');
  // const buttonPlus = document.querySelector('.buttonPlus');
  // console.log(isProduct);

  // const handleChangeOnClick = () => {
  //   onChangeSetProduct(productCartInfo);
  // }

  function increaseAmountOnClick() {
    setAmount((previousAmount) => (previousAmount += 1));
  }

  function decreaseAmountOnClick() {
    setAmount((previousAmount) => {
      if (previousAmount > 1 ) {
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
          <p className="name">{props.name} </p>
          <p className="description">{props.description}</p>
          <p className="price">{props.price}</p>
          <p className="discount">{props.currentPrice}</p>
        </div>
      <InputStyles>
        <div className="inputDiv">
          <button className="buttonMinus" onClick={decreaseAmountOnClick}>
            <img src={iconMinus} alt="iconMinus" />
          </button>
          <span className="spanLabel">{isAmount}</span>
          <button className="buttonPlus" onClick={increaseAmountOnClick}>
            <img src={iconPlus} alt="iconPlus"/>
          </button>
          <input type="submit" id="submit" className="cartInput" value={isAmount}></input>
          <label htmlFor="submit">Add to Cart</label>
        </div>
      </InputStyles>
    </InfoDivStyles> 
  )
}