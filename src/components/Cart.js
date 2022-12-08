import { useRef } from "react";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import styled from "styled-components";
import CartImage from '../images/icon-cart.svg';

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
    background: var(--greyishBlue);
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
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }
  @media only screen and (max-width: 790px) {
    .cart-menu {
      position: absolute;
      width: 25vh;
      height: 100vh;
      background: var(--greyishBlue);
      border-radius: 4px;
      border: 1px solid var(--lightboxBlack);
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      display: flex;
      opacity: 0;
      visibility: hidden;
      right: -2.6em;
      margin: 0;
      top: 2.1em;
      align-items: center;
      justify-content: flex-start;
    }
    .cart-menu.active {
      opacity: 1;
      margin-right: 0;
      visibility: visible;
      z-index: 1;
    }
    ul {
      height: 100vh;
      list-style: none;
      display: flex;
      flex-direction: column;
      padding-right: 0.3em;
      justify-content: flex-start;
    }
  }
`;

export default function Cart() {
  const dropdownRef = useRef(null); // initial ref is null but we pass our ref to our div element below, so dropdownRef.current will be our div
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false); // we add our hook
  const onClick = () => setIsActive(!isActive); // on button click change the state

  return (
    <CartStyles>
      <div ref={dropdownRef}>
        <button onClick={onClick}>
          <img src={CartImage} alt="cart" className="cart"/>
        </button>
        <nav className={`cart-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li>Item</li>
          </ul>
        </nav>
      </div>
    </CartStyles>
  )
}