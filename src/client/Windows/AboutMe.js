import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import Footer from "../Components/Footer"; 
import "../style/aboutme.css"
import Image from 'react-bootstrap/Image';
function AboutMe(){
    return(
        <div>
        <Header></Header>
        <div className="main-content">
            <h1 className="welcomeFont">Anna Poglitsch.</h1>
            <div className="aboutMeContainer">
            <Image className="imagePNG" src={"https://heroui.com/images/hero-card-complete.jpeg"} style={{marginTop: "30px"}}/>
            <div style={{width: "400px", marginTop: "20px"}}>
            <p className="aboutMeText">Lorem ipsum dolor sit amet, 
                consetetur sadipscing elitr, sed diam nonumy
                 eirmod tempor 
                invidunt ut labore et dolore magna aliquyam 
                erat, sed diam voluptua. 
                At vero eos et accusam et justo duo 
                dolores et ea rebum. 
                Stet clita kasd gubergren, no sea takimata 
                sanctus est Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet, consetetur
                 sadipscing elitr, sed 
                diam nonumy eirmod tempor invidunt ut labore 
                et dolore magna aliquyam erat, sed diam voluptua.</p>
            </div>
            
            </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default AboutMe;