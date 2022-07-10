import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';



// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0.5em 1em;
//   padding: 0.25em 1em;

//   ${props => props.primary && css`
//     background: palevioletred;
//     color: white;
//   `}
// `;

// const Container = styled.div`
//   text-align: center;
// `


const Slider = () => {
    return (
        <div className='Slider' >

            <div className="Arrow">
                <ArrowLeftOutlinedIcon />
                <ArrowRightOutlinedIcon/>
            </div>

            {/* <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container> */}

        </div>
    )
}

export default Slider
