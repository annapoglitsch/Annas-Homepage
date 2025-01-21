import React, { useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ContactInput from "../Components/ContactInput";



export function ContactWindowLocation() {

    return (
        <div className='mainDis'>
            {/* Header Section */}
            <Header />

            <div style={{justifySelf: "center", display: "column", marginBottom: "490px"}} >
                <h1 className='welcomeFont'>
                    Contact Me.
                </h1>
                <ContactInput></ContactInput>
            </div>
            
          
            {/* Footer Section */}
            <Footer />

        </div>
    );
}


export default ContactWindowLocation
