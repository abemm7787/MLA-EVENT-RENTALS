import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components'
// import MyImage from "../images/bounce.jpg"
// import MyImage2 from "../images/images2.jpg"
import { useState } from "react";
import { sliderItems } from "../data";


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

`;




const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
     width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`

const Image = styled.img`

 max-width:100%;
    position: absolute;

 width:33.1%;

  left: 0px;
  top: -100px;


//     position: absolute;

  /* height: 80%; */
  /* z-index: -1; */

`;
// const Image2 = styled.img`

//  max-width:100%;
//     position: absolute;
//   left: 0px;
//   top: 0px;
//   z-index: -1;

// `;

const ImgContainer = styled.div`


  flex: 1;
 
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  z-index: 2;
`;


const Title = styled.h1` 
font-size: 70px;

`
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
 
  
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;

`



const Slider = () => {


    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
      if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
    };

    return (
        <Container>
           
           <Arrow direction="left" onClick={() => handleClick("left")}>
           <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>





    
         
  
        </Container >


    )
}

export default Slider
