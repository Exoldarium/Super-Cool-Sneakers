import styled from "styled-components";
import Logo from '../images/logo.svg';
import Cart from "./Cart";
import Account from "./Account";
import HamburgerMenu from "./HamburgerMenu";

const NavbarStyles = styled.nav`
  background: white;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--lightboxBlack);
  @media only screen and (max-width: 790px) {
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
  .header-link {
    text-decoration: none;
  }
  .logo {
    width: auto;
    height: 30px;
  }
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 790px) {
    display: flex;
    .hamburger {
      display: flex;
    }
    .logoHeader {
      display: flex;
      flex: 1 1 auto;
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
  @media only screen and (max-width: 790px) {
    display: none;
  }
`;

export default function Menu() {
  return(
    <NavbarStyles>
      <HamburgerMenu />
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
        <Cart />
        <Account />
      </OuterDivStyles>
    </NavbarStyles>
  );
};