import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Account from './components/Account';
import AddToCartInfo from './components/AddToCartInfo';
import Carousel from './components/Carousel';
import Cart from './components/Cart';
import HamburgerMenu from './components/HamburgerMenu';
import logo from './images/logo.svg';

const GlobalStyles = createGlobalStyle`
  html {
    --red: #ff0000;
    --black: #393939;
    --black: #393939;
    --gray: #3a3a3a;
    --gray: var(--grey); // just in case we mistype gray (or is it grey?)
    --lightGray: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --orange: hsl(26, 100%, 55%);
    --paleOrange: hsl(25, 100%, 94%);
    --veryDarkBlue: hsl(220, 13%, 13%);
    --darkGreyishBlue: hsl(219, 9%, 45%);
    --greyishBlue: hsl(220, 14%, 85%);
    --lightGreyishBlue: hsl(223, 64%, 98%);
    --lightboxBlack: hsl(0, 0%, 0%);
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09); // global box-shadow
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: white;
  }

  *, *::before, *:after {
    box-sizing: inherit; // adding padding to an element will take away from the size instead of growing it
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

`;

const ProductStyles = styled.div`
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  margin-top: 5em;
  div {
    flex: 1 1 0;
    text-align: center;
  }
  @media only screen and (max-width: 790px) {
    display: block;
    height: 100%;
    margin-top: 2em;
    div {
      flex: 1 1 0;
      text-align: center;
    }
  }
`;

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

function App(props) {
  const [setProduct, isProduct] = useState(props.product);

  // add new amount to state
  function addAmount(amount) {
    const newProduct = JSON.parse(JSON.stringify(setProduct));
    const totalPrice = amount * newProduct[0].currentPrice;
    newProduct[0].amount = amount;
    newProduct[0].totalPrice = totalPrice;
    isProduct(newProduct);
  }

  function deleteItem(e) {
    console.log(e.target);
  }
  
  const cart = setProduct.map(product => (
    <Cart 
      id={product.id}
      company={product.company}
      name={product.name}
      description={product.description}
      price={product.price}
      currentPrice={product.currentPrice}
      amount={product.amount}
      totalPrice={product.totalPrice}
      images={product.images}
      key={product.id}
      onClick={deleteItem}
    />
  ));

  const carousel = setProduct.map(product => (
    <Carousel 
      id={product.id}
      company={product.company}
      name={product.name}
      description={product.description}
      price={product.price}
      currentPrice={product.currentPrice}
      amount={product.amount}
      images={product.images}
      totalPrice={product.totalPrice}
      key={product.id}
    />
  ));

  const addToCartInfo = setProduct.map(product => (
    <AddToCartInfo 
      id={product.id}
      company={product.company}
      name={product.name}
      description={product.description}
      price={product.price}
      currentPrice={product.currentPrice}
      amount={product.amount}
      images={product.images}
      totalPrice={product.totalPrice}
      key={product.id}
      onClick={addAmount}
    />
  ));

  return (
    <>
      <GlobalStyles />
        <NavbarStyles>
          <HamburgerMenu />
          <OuterDivStyles>
            <a href="#" className="header-link">
              <h1 className="logoHeader">
                <img src={logo} alt="logo" className="logo"/>
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
            {cart}
            <Account />
          </OuterDivStyles>
        </NavbarStyles>
        <ProductStyles>
          {carousel}
          {addToCartInfo}
        </ProductStyles>
    </>
  );
}

export default App;
