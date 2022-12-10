import { useRef } from "react";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import styled from "styled-components";
import cartImage from '../images/icon-cart.svg';
import deleteIcon from '../images/icon-delete.svg'
import { useState } from "react";

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
  .img, button, div {
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
  .cart-menu {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 2.5em;
    right: 0.1em;
    background: var(--lightGreyishBlue);
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    border: 1px solid var(--lightboxBlack);
    width: 8em;
  }
  .cart-menu.active {
    opacity: 1;
    visibility: visible;
    width: 15em;
    height: fit-content;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
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
  }
  .totalPriceSpan {
    font-weight: bold;
    margin-left: 5px;
    margin: 5px;
  }
  @media only screen and (max-width: 790px) {
    .cart-menu {
      position: absolute;
      top: 2.5em;
      right: 0.1em;
      background: var(--lightGreyishBlue);
      border-radius: 4px;
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      border: 1px solid var(--lightboxBlack);
      width: 8em;
    }
    .cart-menu.active {
      opacity: 1;
      visibility: visible;
      height: fit-content;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
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
      font-weight: bold;
      color: var(--lightGreyishBlue);
      font-weight: bold;
    }
    .totalPriceSpan {
      font-weight: bold;
      margin-left: 5px;
    }
  }
`;

export default function Cart(props) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  console.log(props);

  function deleteItem() {
    props.onClick();
  }

  return (
    <CartStyles>
      <div ref={dropdownRef}>
        <button onClick={onClick}>
          <img src={cartImage} alt="cart" className="cart"/>
        </button>
        <nav className={`cart-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <span className="cartTitle">Cart</span>
            <li>
              <span className="imgSpan">
                <img src={props.images[0].image} alt="shoesImage" className="cartProductImage"/>
              </span>
              <span className="paragraphSpan">
                <p className="paragraphInfo">{props.name}</p>
                <p className="paragraphInfo">{`$${props.currentPrice}`}x{props.amount}<span className="totalPriceSpan">{`$${props.totalPrice}`}</span></p>
              </span>
              <span className="deleteButtonSpan">
                <button>
                  <img src={deleteIcon} alt="deleteIcon" className="deleteItem"/>
                </button>
              </span>  
            </li>
            <span className="buttonSpan">
              <button className="checkout" onClick={deleteItem}>Checkout</button>
            </span>
          </ul>
        </nav>
      </div>
    </CartStyles>
  )
}