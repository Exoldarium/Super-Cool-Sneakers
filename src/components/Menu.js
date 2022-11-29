import React from "react";
import styled from "styled-components";
import CartImage from '../images/icon-cart.svg';
import AvatarImage from '../images/image-avatar.JPG';
import Logo from '../images/logo.svg';

const NavbarStyles = styled.nav`
    background: white;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 95vh;
    align-items: center;
    border-bottom: 1px solid var(--lightboxBlack);
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
`;

export default function Menu() {
  return(
    <NavbarStyles>
      <OuterDivStyles>
        <a href="#" className="header-link">
          <h1>
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
        <a href="#">
          <span>
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