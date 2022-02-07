import React from "react";
import {Component} from 'react'
import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import './Home.scss'
import mainPic from '../assests/frontPage2.jpg'
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
class Home extends Component {
 render(){
     return(
         <div className="main">
         <AppNavbar/>
         <Card inverse className="container-fluid " className="mainpage" >
          <CardImg src={mainPic} alt="festival stage"  className="cardimg" />
          <CardImgOverlay>
           
           <CardTitle tag='h3' className="mt-4" className="datetext" > SAVE THE DATE FOR MUSICVERSE <br/> JUNE 25-26 2022</CardTitle>
          </CardImgOverlay>
          </Card>
         <Footer/>
         </div>
   
     )
 }
}

export default Home