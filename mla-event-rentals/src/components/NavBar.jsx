import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
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

             
                    <div className='input'> 
                        <SearchIcon />
                        <div className='inputBorder'> </div>
                    </div> 


                </div>
                <div className='Center'>
                  <div className='Logo'> MLA Rentals </div>
                </div>
                <div className='Right'>
                    <div className="Badage"> </div>
            

                <Badge badgeContent={4} color="primary">
  <ShoppingCartIcon color="action" />
</Badge>
                <div> Register </div>
                
                <div> Sign In </div>
                </div>

            </div>

        </div>
    )
}

export default NavBar
