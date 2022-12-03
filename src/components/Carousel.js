import { useEffect, useState } from "react";
import styled from "styled-components";
import { productImages } from '../data';
import closeMenu from '../images/icon-close.svg';

const ImageDivStyles = styled.div`
  .smallImageDiv {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .bigImage {
    width: auto;
    height: 500px;
    border-radius: 10px;
    cursor: pointer;
  }
  .smallImage {
    width: auto;
    height: 117px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 790px) {
    .smallImageDiv {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .bigImage {
      width: auto;
      height: 300px;
      border-radius: 10px;
      cursor: pointer;
    }
    .smallImage {
      width: auto;
      height: 70px;
      margin: 5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;

const OverlayStyles = styled.div`
  .overlayDiv{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    min-height: 100vh;
    padding: 7em;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
  }
  .overlay{
    visibility: visible;
  }
  .closeMenu {
    position: absolute;
    margin-left: 43em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .overlayBigImage {
    width: auto;
    height: 600px;
    border-radius: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 790px) {
    display: none;
  }
`;

export default function Carousel() {
  const [imageActive, setImageActive] = useState(productImages[0].imageOne);
  const [isOverlay, setOverlay] = useState(false);
  const onClick= () => setOverlay(!isOverlay);
  
  useEffect(() => {
    const smallImage = document.querySelectorAll('.smallImage');
    function imageClick(e) {
      if(e.target) {
        setImageActive(e.target.src);
      }
    }

    smallImage.forEach(img => img.addEventListener('click', imageClick));
    return () => smallImage.forEach(img => img.removeEventListener('click', imageClick));
  }, []);

  return (
    <ImageDivStyles>
      {productImages.map(img => (
        <div onClick={onClick} key={img}>
          <img src={imageActive} key={img.imageOne} alt="coolShoes" className="bigImage"/>
        </div>
      ))}
      {productImages.map(img => (
        <div key={img} className="smallImageDiv">
          <img src={img.imageOne} key={img.imageOne} alt="coolShoes" className="smallImage"/>
          <img src={img.imageTwo} key={img.imageTwo} alt="coolShoes" className="smallImage"/>
          <img src={img.imageThree} key={img.imageThree} alt="coolShoes" className="smallImage"/>
          <img src={img.imageFour} key={img.imageFour} alt="coolShoes" className="smallImage"/>
        </div>
      ))}
      <OverlayStyles>
        <div className={`overlayDiv ${isOverlay ? 'overlay' : ''}`}>
          {productImages.map(img => (
            <div key={img} className="bigImageOver">
              <button onClick={onClick} className="closeMenu">
                <img src={closeMenu} alt="closeMenu"/>
              </button>
              <img src={imageActive} key={img.imageOne} alt="coolShoes" className="overlayBigImage"/>
            </div>
          ))}
        </div>
      </OverlayStyles>
    </ImageDivStyles>
  )
}