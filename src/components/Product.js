import styled from "styled-components";

const WrapperStyles = styled.div`
  background: var(--lightGreyishBlue);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  margin-top: 0;
`

export default function Product() {
  return(
    <>
      <WrapperStyles>
          <div>
            <p>Images go here</p>
          </div>
          <div>
            <p>Product details go here</p>
          </div> 
      </WrapperStyles>
    </>
  )
}