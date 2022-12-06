import { useEffect, useState } from "react";
import styled from "styled-components";
import { productImages } from '../data';
import closeMenu from '../images/icon-close.svg';
import nextButton from '../images/icon-next.svg';
import previousButton from '../images/icon-previous.svg';

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
    display: inline-block;
  }
  .bigImagemobile {
    display: none;
  }
  .smallImage {
    width: auto;
    height: 117px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
  .previousButtonMobile, .nextButtonMobile {
    display: none;
  }
  @media only screen and (max-width: 790px) {
    .previousButtonMobile {
      position: absolute;
      margin-top: 12em;
      margin-left: -2.5em;
      display: inline-block;
      cursor: pointer;
      z-index: 0;
    }
    .nextButtonMobile {
      position: absolute;
      margin-top: 12em;
      margin-left: 23em;
      display: inline-block;
      cursor: pointer;
      z-index: 0;
    }
    .smallImageDiv{
      display: none;
    }
    .bigImage { 
      display: none;
    }
    .bigImagemobile {
      width: auto;
      height: 300px;
      border-radius: 10px;
      cursor: pointer;
      display: inline-block;
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
    margin-left: 42.8em;
    cursor: pointer;
  }
  .overlayBigImage {
    width: auto;
    height: 600px;
    border-radius: 10px;
    cursor: pointer;
  }
  .nextButton {
    position: absolute;
    margin-top: 20em;
    margin-left: 45em;
    cursor: pointer;
  }
  .previousButton {
    position: absolute;
    margin-top: 20em;
    margin-left: -2em;
    cursor: pointer;
  }
  @media only screen and (max-width: 790px) {
    display: none;
  }
`;

export default function Carousel() {
  // set active image
  const [imageActive, setImageActive] = useState(productImages[0].image);
  // set overlay image id
  const [imageId, setImageId] = useState(0);
  // set overlay image
  const [isOverlay, setOverlay] = useState(false);
  const onClick = () => setOverlay(!isOverlay);

  // try to set the image id into the imageActive instead of the path name and match that id with the object in data.js to map the correct image
  // set clicked image to be the main image
  useEffect(() => {
    const smallImage = document.querySelectorAll('.smallImage');
    function imageClick(e) {
      if(e.target) {
        setImageActive(e.target.src);
        setImageId(e.target.id);
      }
    }
    smallImage.forEach(img => img.addEventListener('click', imageClick));
    return () => smallImage.forEach(img => img.removeEventListener('click', imageClick));
  }, []);

  // scroll images forward
  function nextImageOnClick() {
    if(imageId === 3) {
      setImageId(0);
    } else {
      setImageId(parseFloat(imageId) + 1);
    }
  }

  // scroll images back
  function previousImageOnClick() {
    if(imageId === 0) {
      setImageId(3);
    } else {
      setImageId(parseFloat(imageId) - 1);
    }
  }
  
  return (
    <ImageDivStyles>
      <div onClick={onClick}>
        {/* under 790px witdth */}
        <button className="previousButtonMobile" onClick={previousImageOnClick}>
          <img src={previousButton} alt="nextButton"/>
        </button>
        <button className="nextButtonMobile" onClick={nextImageOnClick}>
          <img src={nextButton} alt="previousButton"/>
        </button>
        <img src={productImages[imageId].image} id={imageId} alt="coolShoes" className="bigImagemobile"/>
        {/* over 790px witdth */}
        <img src={imageActive} id={imageId} alt="coolShoes" className="bigImage"/>
      </div>
      <div className="smallImageDiv">
        {productImages.map(img => (
          <img src={img.image} key={img.id} id={`${img.id}`} alt="coolShoes" className="smallImage"/>
        ))}
      </div>
      <OverlayStyles>
        {/* only over 790px witdth */}
        <div className={`overlayDiv ${isOverlay ? 'overlay' : ''}`}>
          <div key={closeMenu.id} className="bigImageOver">
            <button onClick={onClick} className="closeMenu">
                <img src={closeMenu} alt="closeMenu"/>
            </button>
            <button className="previousButton" onClick={previousImageOnClick}>
              <img src={previousButton} alt="nextButton"/>
            </button>
            <button className="nextButton" onClick={nextImageOnClick}>
              <img src={nextButton} alt="previousButton"/>
            </button>
            <img src={productImages[imageId].image} alt="coolShoes" className="overlayBigImage"/>
          </div>
        </div>
      </OverlayStyles>
    </ImageDivStyles>
  )
}