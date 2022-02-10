import React from "react";
import { Card, CardTitle, CardImg, CardImgOverlay, CardText } from "reactstrap";
import coverPic from '../assests/philosophy.jpg'
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import './main.scss'

const Philosophy = () =>{
    return(
        <div className="main">
            <AppNavbar/>
            <Card inverse className="container-fluid mainpage">
                <CardImg src={coverPic} alt='festival chill zone' className="cardImg" />
                <CardImgOverlay>
                    <CardTitle tag="h3" className="p-0 header"> ABOUT MUSICVERSE</CardTitle>
                    <CardText className=" pt-1 pb-2 text">
                        Musicverse was created by music lovers to musiclovers! We invite you to join our vision of paradise as an electronic music lovers. We guarantee you'll be taken to another dimetion by the great artist we invite to perform in MUSICVERSE along with our guests who are like-minded like you.<br/>
                        We promote local talents along with international electronic music masters. This year, we decided to dedicate a stage for local new artists in order to help them to succeed in music industry. If you are an artist, please contact us by contact form we provide in F.A.Q, we're looking forward to hearing from you!<br/>
                        We highly encourage our guests to stay in the camping to enjoy full experience of MUSICVERSE. For those who'd like to travel light, we'll have an option to rent the tents on camping site. People often leave them behind and we try to recycle them and give them a second life. For your comfort we'll provide breakfast bar in the camping as well as hot showers.<br/>
                        We cant wait to see you in July!
                    </CardText>
                </CardImgOverlay>
            </Card>
           <Footer/> 

        </div>
    )
    
}

export default Philosophy