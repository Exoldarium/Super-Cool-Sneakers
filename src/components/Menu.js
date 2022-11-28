import React from "react";
import styled from "styled-components";

const NavbarStyles = styled.nav`
    background: var(--lightGreyishBlue);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    max-width: 100%;
    align-items: center;
`;

const OuterDivStyles = styled.div`
    flex: 1 1 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin: 0;
    }
    a {
      padding: 10px;
    }
`;

const InnerDivStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 auto;
  text-align: center;
  a {
    padding: 10px;
  }
`;

export default function Menu() {
  return(
    <NavbarStyles>
      <OuterDivStyles>
        <a>
          <h1>Sneakers</h1>
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
          <span>Cart</span>
        </a>
        <a href="#">
          <span>Account</span>
        </a>
      </OuterDivStyles>
    </NavbarStyles>
  );
};