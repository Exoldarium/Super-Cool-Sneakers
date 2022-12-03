import { useRef } from 'react';
import styled from 'styled-components';
import AvatarImage from '../images/image-avatar.JPG';
import { useDetectOutsideClick } from '../useDetectOutsideClick';

const Avatarstyles = styled.div`
  margin: 0;
  max-width: 2em;
  position: relative;
  cursor: pointer;
  .avatar {
    border: 1px solid black;
    border-radius: 30px;
    height: 45px;
    width: 45px;
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
    margin-bottom: 10px;
  }
  .avatar-menu {
    position: absolute;
    background: var(--greyishBlue);
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    visibility: hidden;
    border: 1px solid var(--lightboxBlack);
    top: 2.7em;
    right: 0.1em;
    position: absolute;
    width: 7em;
  }
  .avatar-menu.active {
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
    .avatar-menu {
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
      margin: 0;
      right: -0.5em;
      align-items: center;
      top: 2.3em;
      justify-content: center;
    }
    .avatar-menu.active {
      opacity: 1;
      margin-right: 0;
      visibility: visible;

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

export default function Account() {
  const dropdownRef = useRef(null); // initial ref is null but we pass our ref to our div element below, so dropdownRef.current will be our div
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false); // we add our hook
  const onClick = () => setIsActive(!isActive); // on button click change the state

  return (
    <Avatarstyles>
      <div ref={dropdownRef}>
        <button onClick={onClick}>
          <img src={AvatarImage} alt="cart" className="avatar"/>
        </button>
        <nav className={`avatar-menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <a href='#'>
            <li>My Account</li>
          </a>
          <a href='#'>
            <li>Settings</li>
          </a>
          <a href='#'>
            <li>Help</li>
          </a>
          <a href='#'>
            <li>Sign Out</li>
          </a>
        </ul>
        </nav>
      </div>
    </Avatarstyles>
  )
}