import React, { useState } from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import ContactInput from "../Components/ContactInput";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import "../style/main.css"
import contactMeCards from "../static/contactMeCards.json"
import { useFetchLanguage } from "../static/UseEffect";

export function ContactWindowLocation({ language, setLanguage }) {
    const content = useFetchLanguage(language);


    if (!content) {
      return <div>Loading...</div>;
    }
    const languageContent = content.language[0];

    return (
        <div className='mainDis'>
            {/* Header Section */}
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage}/>

            <div style={{justifySelf: "center", display: "column"}} >
                <h1 aria-label={languageContent.ContactMeTitel} className='pageTitle'>
                    {languageContent.ContactMeTitel}
                </h1>
                <ContactInput languageChoice={languageContent}></ContactInput>
            </div>
            <div className="cardInfo" style={{marginBottom:"4%", width:"60%", marginTop: "10%", marginLeft: "20%"}}>
                {contactMeCards.contactMeCards.map(card => {
                    return(
                          <Card  style={{ background: "white", width: "100%", height: "auto", fontSize: "20px" }}>
                            <CardHeader aria-label={card.header} color="#E2E1CF" style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                                <div className="flex flex-col">
                                    <p className="text-md">{card.header}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody aria-label={card.body} style={{ height: "200px", paddingLeft: "10px" }}>
                                <p>{card.body}</p>
                            </CardBody>
                            <CardFooter aria-label={card.footer} style={{ background: "#E2E1CF" }}>
                                <Link href="https://github.com/frontio-ai/heroui" className="custom-link">
                                    {card.footer}
                                </Link>
                            </CardFooter>
                        </Card>
                    )
                })}
          
            </div>
          
            {/* Footer Section */}
            <Footer languageChoice={languageContent} />

        </div>
    );
}


export default ContactWindowLocation
