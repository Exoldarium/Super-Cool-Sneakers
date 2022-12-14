import { useRef } from 'react';
import styled from 'styled-components';
import AvatarImage from '../images/image-avatar.JPG';
import { useDetectOutsideClick } from '../useDetectOutsideClick';

// https://stackoverflow.com/questions/65361994/prevent-absolute-div-from-going-off-screen

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
    background: var(--lightGreyishBlue);
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
    visibility: hidden;
    border: 1px solid var(--lightboxBlack);
    top: 2.7em;
    left: 0.2em;
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
    .avatar-menu.active {
      position: absolute;
      width: 45vw;
      height: 100vh;
      background: var(--lightGreyishBlue);
      border-radius: 0;
      border: 1px solid var(--lightboxBlack);
      box-shadow: 0 50px 100px rgba(50,50,93,.1), 0 15px 35px rgba(50,50,93,.15), 0 5px 15px rgba(0,0,0,.1);
      display: flex;
      margin: 0;
      align-items: center;
      top: 2.3em;
      left: -7em;
      justify-content: center;
      z-index: 1;
    }
    .avatar-menu.hidden {
      display: none;
    }
    .avatar {
      border: 1px solid black;
      border-radius: 30px;
      height: 35px;
      width: 35px;
    }
    button {
      padding-top: 0.3em;
    }
    ul {
      font-size: 22px;
      height: 100vh;
      list-style: none;
      display: flex;
      flex-direction: column;
      padding-right: 0.3em;
      align-items: flex-start;
    }
  }
`;

export default function Account() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Avatarstyles>
      <div ref={dropdownRef}>
        <button onClick={onClick}>
          <img src={AvatarImage} alt="cart" className="avatar"/>
        </button>
        <nav className={`avatar-menu ${isActive ? 'active' : 'hidden'}`}>
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