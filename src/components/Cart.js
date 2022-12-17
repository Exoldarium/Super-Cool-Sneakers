import styled from "styled-components";
import cartImage from '../images/icon-cart.svg';
import deleteIcon from '../images/icon-delete.svg';
import closeMenu from '../images/icon-close.svg';
import { useState } from "react";
import { useEffect } from "react";

const CartStyles = styled.div`
  margin: 0;
  max-width: 2em;
  position: relative;
  .cart {
    height: 35px;
    width: 35px;
  }
  .cart:hover {
    scale: 1.2;
  }
  button {
    border: none;
    background: none;
  }
  .img, div {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
  }
  .cartButton {
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
  }
  div {
    height: 37px;
    width: auto;
    margin-right: 5px;
  }
  .cartMenu.active {
    position: absolute;
    width: 15em;
    top: 2.5em;
    right: 0.5em;
    background: var(--lightGreyishBlue);
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    opacity: 1;
    visibility: visible;
    border: 1px solid var(--lightboxBlack);
    z-index: 1;
  }
  .cartMenu.hidden {
    display: none;
  }
  .closeCartMenu {
    position: absolute;
    left: 20em;
    top: 0.5em;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    cursor: default;
  }
  li {
    border-top: 1px solid black;
    cursor: default;
  }
  .cartProductImage {
    width: auto;
    height: 50px;
    border-radius: 5px;
  }
  .imgSpan {
    display: inline-block;
    flex-direction: row;
    margin: 5px;
  }
  .paragraphInfo {
    margin: 0;
  }
  .paragraphSpan {
    display: inline-block;
    margin: 5px;
    text-align: left;
    line-height: 33px;
  }
  .deleteItem {
    display: inline-block;
    padding: 10px;
    margin: 5px;
  }
  .checkout {
    width: 20em;
    height: 3em;
    background: var(--orange);
    margin: 5px;
    margin-bottom: 20px;
    border-radius: 4px;
    color: var(--lightGreyishBlue);
    text-align: center;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
  .totalPriceSpan {
    font-weight: bold;
    margin-left: 5px;
    margin: 5px;
  }
  .cartAmountDiv {
    height: fit-content;
    margin: 0;
    cursor: default;
  }
  .amountBubble {
    position: absolute;
    left: 25px;
    bottom: 32px;
    border-radius: 20px;
    background: var(--orange);
    width: 20px;
    height: 20px;
    font-size: 15px;
    color: var(--lightGreyishBlue);
  }
  .removeProductButton {
    cursor: pointer;
  }
  @media only screen and (min-width: 790px) and (max-width: 1000px) {
    .cartMenu.active {
      position: absolute;
      width: 15em;
      top: 2.5em;
      right: 4em;
      background: var(--lightGreyishBlue);
      border-radius: 4px;
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      opacity: 1;
      visibility: visible;
      border: 1px solid var(--lightboxBlack);
      z-index: 1;
    }
  }
  @media only screen and (max-width: 790px) {
    .cart {
      height: 30px;
      width: auto;
    }
    .cart:hover {
      scale: 1;
    }
  }
  `;

export default function Cart(props) {
  const [isAmountActive, setAmountIsActive] = useState(false);
  const [isMenuActive, setMenuIsActive] = useState(false);
  const onClick = () => setMenuIsActive(!isMenuActive);
  
  useEffect(() => {
    if(props.amount >= 1) {
      setAmountIsActive(true);
    }
    if(props.amount === 0) {
      setAmountIsActive(false);
    }
  }, [props.amount]);
  
  
  // check the amount if zero render empty cart, if not render product
  const isAmount = (
    <div className="cartAmountDiv">
      <span className="imgSpan">
        <img src={props.images[0].image} alt="shoesImage" className="cartProductImage"/>
      </span>
      <span className="paragraphSpan">
        <p className="paragraphInfo">{props.name}</p>
        <p className="paragraphInfo">{`$${props.currentPrice}`}x{props.amount}<span className="totalPriceSpan">{`$${props.totalPrice}`}</span></p>
      </span>
      <span className="deleteButtonSpan">
        <button className="removeProductButton" onClick={() => props.onClickRemoveItem()}>
          <img src={deleteIcon} alt="deleteIcon" className="deleteItem"/>
        </button>
      </span>  
      <span className="buttonSpan">
        <button className="checkout">Checkout</button>
      </span>
    </div>
  );
  
  const noAmount = (
    <div className="cartAmountDiv">
      <p>Your cart is empty</p>
    </div>
  );
  
  // check the amount if > 0 add amount on top of cart
  const showAmountOnCart = (
    <button className="cartButton" onClick={onClick}>
      <span className="amountBubble">{props.amount}</span>
      <img src={cartImage} alt="cart" className="cart"/>
    </button>
  );
  
  const noAmountOnCart = (
    <button className="cartButton" onClick={onClick}>
        <img src={cartImage} alt="cart" className="cart"/>
      </button>
  );

  return (
    <CartStyles>
      <div>
        {isAmountActive ? showAmountOnCart : noAmountOnCart}
        <nav className={`cartMenu ${isMenuActive ? 'active' : 'hidden'}`}>
          <ul>
            <span className="cartTitle">Cart</span>
            <button className="closeCartMenu" onClick={onClick}>
              <img src={closeMenu} alt="closeCart"/>
            </button>
            <li>
              {isAmountActive ? isAmount : noAmount}
            </li>
          </ul>
        </nav>
      </div>
    </CartStyles>
  )
}