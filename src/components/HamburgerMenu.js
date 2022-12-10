import { useRef } from "react";
import styled from "styled-components";
import hamburger from '../images/icon-menu.svg';
import { useDetectOutsideClick } from "../useDetectOutsideClick";

const HamburgerStyles = styled.div`
  display: none;
  @media only screen and (max-width: 790px) {
    display: flex;
    position: relative;
    flex: 1 1 0;
    .hamburger-menu {
      position: absolute;
      width: 25vh;
      background: var(--lightGreyishBlue);
      border-radius: 4px;
      border: 1px solid var(--lightboxBlack);
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      display: flex;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      margin: 0;
      align-items: center;
    }
    .hamburger-menu.active {
      opacity: 1;
      top: 2em;
      visibility: visible;
      position: absolute;
      display: flex;
      justify-content: flex-start;
      z-index: 1;
    }
    img {
      width: auto;
      height: 30px;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    ul {
      height: 100vh;
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding-left: 0.3em;
    }
  }
`;

export default function HamburgerMenu() {
  const dropdownRef = useRef(null); 
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false); 
  const onClick = () => setIsActive(!isActive);

  return (
    <HamburgerStyles>
      {/* only shows under 790px screen size */}
      <div ref={dropdownRef}>
        <button onClick={onClick}>
          <img src={hamburger} alt="menuicon"/>
        </button>
        <nav className={`hamburger-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <li>        
              <a href="#">
                <span>Collections</span>
              </a>
            </li>
            <li>        
              <a href="#">
                <span>Men</span>
              </a>
            </li>
            <li>        
              <a href="#">
                <span>Women</span>
              </a>
            </li>
            <li>        
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>        
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </HamburgerStyles>
  )
}