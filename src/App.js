import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Account from './components/Account';
import AddToCartInfo from './components/AddToCartInfo';
import Gallery from './components/Gallery';
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
    min-height: 100vh;
    min-width: 100vw;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background: white;
    min-height: 100vh;
    min-width: 100vw;
  }
  *, *:before, *:after {
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
  margin-top: 5em;
  div {
    flex: 1 1 0;
    text-align: center;
  }
  @media only screen and (max-width: 790px) {
    display: block;
    margin: 0;
    padding-bottom: 70px;
    div {
      flex: 1 1 0;
      text-align: center;
    }
  }
`;

const NavbarStyles = styled.nav`
  background: white;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid var(--lightboxBlack);
  @media only screen and (max-width: 790px) {
    border-bottom: 1px solid black;
    padding-top: 0.5em;
    margin: 0;
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
    justify-content: flex-end;
    .logoHeader {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding-bottom: 0.2em;
      padding-left: 0.3em;
    }
  }
`;

const InnerDivStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1 1 0;
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
  const [isProduct, setProduct] = useState(props.product);
  const storedAmount = JSON.parse(sessionStorage.getItem('amount'));
  const storedTotalPrice = JSON.parse(sessionStorage.getItem('totalPrice'));

  // add new amount to state but account the previous amount too
  function addProduct(productAmount) {
    const newProduct = JSON.parse(JSON.stringify(isProduct));
    const totalPrice = storedAmount * newProduct[0].currentPrice;
    newProduct[0].amount = productAmount + storedAmount;

    if (newProduct[0].amount === 0) {
      newProduct[0].totalPrice = totalPrice;
    }
    if (newProduct[0].amount >= 1) {
      newProduct[0].totalPrice = newProduct[0].amount * newProduct[0].currentPrice;
    }
    setProduct(newProduct);
    sessionStorage.setItem('amount', newProduct[0].amount);
    sessionStorage.setItem('totalPrice', newProduct[0].totalPrice);
  }

  // remove product from cart and set previous amount to 0
  function removeItem() {
    const removeProduct = JSON.parse(JSON.stringify(isProduct));
    removeProduct[0].amount = 0;
    setProduct(removeProduct);
    sessionStorage.setItem('amount', 0);
    sessionStorage.setItem('totalPrice', 0);
  }

  const cart = isProduct.map(product => (
    <Cart 
      id={product.id}
      company={product.company}
      name={product.name}
      description={product.description}
      price={product.price}
      currentPrice={product.currentPrice}
      amount={storedAmount}
      totalPrice={storedTotalPrice}
      images={product.images}
      key={product.id}
      onClickRemoveItem={removeItem}
    />
  ));

  const gallery = isProduct.map(product => (
    <Gallery 
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

  const addToCartInfo = isProduct.map(product => (
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
      onClick={addProduct}
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
                <img src={logo} alt="website logo" className="logo"/>
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
          {gallery}
          {addToCartInfo}
        </ProductStyles>
    </>
  );
}

export default App;
