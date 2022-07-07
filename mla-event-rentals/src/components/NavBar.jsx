import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
//import styled from "styled-components"

// const Container = styled.div `
// height: 60px;
// background-color: black;
// `


const NavBar = () => {
    return (
        <div className='Container'>
            <div className='Wrapper'>

                <div className='Left'>
                   <div> EN </div>
                   <div>  input 
                    icon
                    {/* <SearchIcon/> */}
                     </div>
                </div>
                <div  className='Center'>
                    Center
                </div>
                <div  className='Right'>
                    Right
                </div>

            </div>

        </div>
    )
}

export default NavBar
