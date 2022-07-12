import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from "../components/Announcement"
import Slider from  "../components/Slider"
import styled from "styled-components"
import Categories from './Categories'
import Products from "../components/Products";

const MegaSlider = styled.div `

display:flex;




`




const Home = () => {
  return (
    <div>
   < Announcement/>
   <NavBar/>
   <Slider/>
  <Categories/>

<Products/>
 

     </div>
  )
}

export default Home
