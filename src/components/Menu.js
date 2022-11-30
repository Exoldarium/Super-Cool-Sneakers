import { forwardRef, React, useRef, useState } from "react";
import styled from "styled-components";
import CartImage from '../images/icon-cart.svg';
import AvatarImage from '../images/image-avatar.JPG';
import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-menu.svg';

const NavbarStyles = styled.nav`
    background: white;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--lightboxBlack);
    @media only screen and (max-width: 920px) {
      display: flex;
    }
`;

const OuterDivStyles = styled.div`
    flex: 1 1 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    h1 {
      margin: 0;
      font-size: 40px;
    }
    a {
      padding: 10px;
    }
    .header-link {
      text-decoration: none;
    }
    .avatar {
      border: 1px solid black;
      border-radius: 30px;
      height: 60px;
      width: 60px;
    }
    .avatar:hover {
      border: 2px solid;
      border-color: var(--orange);
    }
    .cart {
      height: 35px;
      width: 35px;
    }
    .cart:hover {
      scale: 1.2;
    }
    .logo {
      width: auto;
      height: 30px;
    }
    .hamburger {
      display: none;
    }
    .dropDown {
      position: absolute;
      width: 100px;
      height: 100px;
      background: var(--greyishBlue);
      border-radius: 4px;
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      display: flex;
      justify-content: center;
      opacity: 0;
      top: -1000px;
    }
    .open {
      opacity: 1 !important;
      top: 80px !important;
      margin-right: 70px;
    }
    @media only screen and (max-width: 920px) {
      display: flex;
      .hamburger {
        display: flex;
      }
      .logoHeader {
        display: flex;
        flex: 1 1 auto;
      }
      .cartAccountHeader {
        display: flex;
        flex: 1 1 0;
      }
    }
`;

const InnerDivStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  text-align: center;
  font-size: 17px;
  a {
    padding: 10px;
    font-weight: bold;
  }
  a:hover {
    text-decoration-color: var(--orange);
    text-decoration-thickness: 3px;
  }
  @media only screen and (max-width: 920px) {
    display: none;
  }
`;

const HamburgerStyles = styled.div`
  display: none;
  @media only screen and (max-width: 920px) {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 30px;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

export default function Menu() {
  function handleClick() {
    const dropdownShow = document.querySelector('.dropDown');
    dropdownShow.classList.add('open');
  }

  // const cartDropdown = useRef(null);
  // const [openSlide, setOpenSlide] = useState('');
  // const closeDropdown = (e) => {
  //   if(cartDropdown.current && openSlide && !cartDropdown.current.contains(e.target)) {
  //     setOpenSlide(false);
  //   }
  // }
  // document.addEventListener('mousedown', closeDropdown);
  // https://codesandbox.io/s/react-withclickoutside-forked-bok38?fontsize=14&hidenavigation=1&theme=dark&file=/src/withClickOutside.js

  return(
    <NavbarStyles>
      <HamburgerStyles>
        <button>
          <img src={Hamburger} alt="menuicon"/>
        </button>
      </HamburgerStyles>
      <OuterDivStyles>
        <a href="#" className="header-link">
          <h1 className="logoHeader">
            <img src={Logo} alt="logo" className="logo"/>
          </h1>
        </a>
      </OuterDivStyles>
      <InnerDivStyles>
        <a href="#">
          <span>Collections</span>
        </a>
        <a href="#">
          <span>Men</span>
        </a>
        <a href="#">
          <span>Women</span>
        </a>
        <a href="#">
          <span>About</span>
        </a>
        <a href="#">
          <span>Contact</span>
        </a>
      </InnerDivStyles>
      <OuterDivStyles>
        <div className="dropDown">
          <div>item</div>
        </div>
        <a href="#" onClick={handleClick}>
          <span className="cartAccountHeader">
            <img src={CartImage} alt="cart" className="cart"/>
          </span>
        </a>
        <a href="#">
          <img src={AvatarImage} alt="avatar" className="avatar"/>
        </a>
      </OuterDivStyles>
    </NavbarStyles>
  );
};