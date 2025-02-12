import React, { useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ContactInput from "../Components/ContactInput";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import "../style/main.css"
import contactMeCards from "../static/contactMeCards.json"

export function ContactWindowLocation() {

    return (
        <div className='mainDis'>
            {/* Header Section */}
            <Header />

            <div style={{justifySelf: "center", display: "column"}} >
                <h1 className='pageTitle'>
                    Contact Me.
                </h1>
                <ContactInput></ContactInput>
            </div>
            <div className="cardInfo" style={{marginBottom:"4%", width:"60%", marginTop: "10%", marginLeft: "20%"}}>
                {contactMeCards.contactMeCards.map(card => {
                    return(
                          <Card  style={{ background: "white", width: "100%", height: "auto", fontSize: "20px" }}>
                            <CardHeader color="#E2E1CF" style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                                <div className="flex flex-col">
                                    <p className="text-md">{card.header}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody style={{ height: "200px", paddingLeft: "10px" }}>
                                <p>{card.body}</p>
                            </CardBody>
                            <CardFooter style={{ background: "#E2E1CF" }}>
                                <Link href="https://github.com/frontio-ai/heroui" className="custom-link">
                                    {card.footer}
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })}
          
            </div>
          
            {/* Footer Section */}
            <Footer />

        </div>
    );
}


export default ContactWindowLocation
