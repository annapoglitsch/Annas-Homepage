import React from 'react';

import "./home.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import CardJS from "../Components/Card"

function MyWork() {
    return (
        <div style={{ backgroundColor: "#F7F6E3", minHeight: "100vh" }}>
           <Header></Header>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h1 style={{ fontSize: "100px", fontWeight: "400", fontFamily: "serif", color: "#383C34", }}>Let's Talk about Work.</h1>
            </div>
            <CardJS></CardJS>
            <Footer></Footer>

        </div>

    )
}
export default MyWork;