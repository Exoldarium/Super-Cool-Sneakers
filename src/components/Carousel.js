import { useEffect, useState } from "react";
import styled from "styled-components";
import { productImages } from '../data';

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

export default function Carousel() {
  const [isActive, setIsActive] = useState('');

  useEffect(() => {
    const smallImage = document.querySelectorAll('.smallImage');
    const bigImage = document.querySelector('.bigImage');
    bigImage.src = productImages[0].imageOne;
    function imageClick(e) {
      if(e.target) {
        setIsActive(e.target.src);
      }
    }
    smallImage.forEach(img => img.addEventListener('click', imageClick));
  }, [])

  return (
    <ImageDivStyles>
      {productImages.map(img => (
        <div key={img}>
          <img src={isActive} key={img.imageOne} alt="coolShoes" className="bigImage"/>
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
    </ImageDivStyles>
  )
}