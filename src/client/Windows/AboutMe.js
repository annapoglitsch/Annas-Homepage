import React from 'react';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../style/home.css"
import "../style/main.css"

function AboutMe() {
    return (
        <div className='mainDis'>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginBottom: "130px"}}>
                <h1 className='pageTitle'>Anna Poglitsch.</h1>
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
                            marginBottom: "10px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            width: "50%",
                            height: "50%"
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