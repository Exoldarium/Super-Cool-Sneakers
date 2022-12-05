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
  }
  .smallImage {
    width: auto;
    height: 117px;
    margin: 5px;
    border-radius: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 790px) {
    .smallImageDiv{
      display: none;
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
  }
  .previousButton {
    position: absolute;
    margin-top: 20em;
    margin-left: -2em;
  }
  @media only screen and (max-width: 790px) {
    display: none;
  }
`;

export default function Carousel() {
  // set active image
  const [imageActive, setImageActive] = useState(productImages[0].image);
  // set overlay image id
  const [nextImage, setNextImage] = useState(0);
  // set overlay image
  const [isOverlay, setOverlay] = useState(false);
  const onClick = () => setOverlay(!isOverlay);
 
  // scroll images forward
  function nextImageOnClick() {
    if(nextImage === 3) {
      setNextImage(0);
    } else {
      setNextImage(nextImage + 1);
    }
  }

  // scroll images back
  function previousImageOnClick() {
    if(nextImage === 0) {
      setNextImage(3);
    } else {
      setNextImage(nextImage - 1);
    }
  }
  
  // set clicked image to be the main image
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
      <div onClick={onClick}>
        <img src={imageActive} alt="coolShoes" className="bigImage"/>
      </div>
      <div className="smallImageDiv">
        {productImages.map(img => (
          <img src={img.image} key={img.id} id={`${img.id}`} alt="coolShoes" className="smallImage"/>
        ))}
      </div>
      <OverlayStyles>
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
            <img src={productImages[nextImage].image} alt="coolShoes" className="overlayBigImage"/>
          </div>
        </div>
      </OverlayStyles>
    </ImageDivStyles>
  )
}