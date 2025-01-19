import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import Footer from "../Components/Footer"; 

function AboutMe(){
    return(
        <div>
        <Header></Header>
        <div className="main-content">
            <h1 className="welcomeFont">Anna Poglitsch.</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default AboutMe;