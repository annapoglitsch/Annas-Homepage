import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import Footer from "../Components/Footer";
import "../style/home.css"
import ContactMe from "../Components/ContactMe"


function Contact() {
    return (
        <div>
            <Header></Header>
            <div className="divMAin">
                <h1 className="fontwelcome">Contact Me.</h1>
                <ContactMe></ContactMe>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Contact;