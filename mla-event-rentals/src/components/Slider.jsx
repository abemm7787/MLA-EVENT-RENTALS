import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components'
import MyImage from "../images/bounce.jpg"



const Container = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  /* position: relative; */
  justify-content: center;
 align-items: center;

`




const Arrow = styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
bottom:0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity: 0.5;
`

const Wrapper = styled.div`
height: 100%;
`

const Slide = styled.div`
    display:flex;
    align-items:center;
`

const Image = styled.img`

 max-width:100%;
    height:auto;
    position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;

`;

const ImageContainer = styled.div`
flex:1;
`;

const infoContainer = styled.div`


`


const Title = styled.h1` 
font-size: 70px;

`
const Desc = styled.p`
margin:50px 0px;
font-size: 20px;
letter-spacing:3px;



`
const Button = styled.button``


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                <ImageContainer>
                    <Image src={MyImage} alt=""></Image>
                </ImageContainer>
           
            </Wrapper>
            
            <Arrow direction="right">
                <ArrowRightOutlinedIcon />
            </Arrow>

            <infoContainer>
                    <Title>
                        Bouncy House Sales!

                    </Title>
                    <Desc>
                        DON'T COMPRISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
                    </Desc>
                    <Button>
                        SHOP NOW!
                    </Button>
                </infoContainer>
        </Container>

        
    )
}

export default Slider
