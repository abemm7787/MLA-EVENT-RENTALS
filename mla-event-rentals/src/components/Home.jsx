import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from "../components/Announcement"
import Slider from  "../components/Slider"
import styled from "styled-components"

const MegaSlider = styled.div `

display:flex;




`



const Home = () => {
  return (
    <div>
   < Announcement/>
   <NavBar/>

   <MegaSlider>
   <Slider/>
  
   </MegaSlider>
     </div>
  )
}

export default Home
