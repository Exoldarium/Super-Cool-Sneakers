import { createGlobalStyle } from 'styled-components';
import Menu from './components/Menu';
import Product from './components/Product';

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

function App() {
  return (
    <>
      <GlobalStyles />
        <Menu />
        <Product />
    </>
  );
}

export default App;
