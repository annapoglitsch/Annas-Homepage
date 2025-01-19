import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import LinkHeader from "../Components/Linkheader";
import Footer from "../Components/Footer"; 
import Images from "../Components/Images";

function Home(){
    return(
        <div>
        <Header></Header>
        <div className="main-content">
                <h1 className="welcomeFont">Welcome.</h1>
                <LinkHeader></LinkHeader>
                <Images></Images>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Home;