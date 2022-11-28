import React from "react";
import styled from "styled-components";

const NavbarStyles = styled.nav`
    background: var(--lightGreyishBlue);
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    h1 {
      margin: 0;
    }
`

export default function Menu() {
  return(
    <NavbarStyles>
        <h1>Sneakers</h1>
        <div>
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      <div>
        <span>Cart</span>
        <span>Account</span>
      </div>
    </NavbarStyles>
  );
};