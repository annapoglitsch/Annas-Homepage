import React from 'react';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../style/home.css"

function AboutMe() {
    return (
        <div className='mainDis'>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginBottom: "130px"}}>
                <h1 className='welcomeFont'>Anna Poglitsch.</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",  
                    justifyContent: "center",  
                    gap: "20px",  
                    flexWrap: "wrap", 
                    marginTop: "20px" 
                }}>  
                    <img
                        alt={`HeroUI Image`}
                        src="https://heroui.com/images/hero-card-complete.jpeg"
                        style={{
                            maxWidth: "600px",
                            height: "400px",
                            marginBottom: "10px",
                        }}
                    />
                    <p style={{ maxWidth: "600px", fontSize: "20px", lineHeight: "1.6", fontWeight: "bold", fontFamily: "sans-serif" }}>Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutMe;