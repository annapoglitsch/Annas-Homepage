import React from 'react';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../style/home.css"
import "../style/main.css"
import "../style/aboutme.css"
import aboutMeCards from "../static/aboutMeCards.json"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { useFetchLanguage } from "../static/UseEffect";


function AboutMe({ language, setLanguage }) {

    const content = useFetchLanguage(language);


  if (!content) {
    return <div>Loading...</div>;
  }
  const languageContent = content.language[0];

    return (
        <div className='mainDis'>
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage}></Header>
            <div style={{ direction: "column", textAlign: "center", marginBottom: "130px" }}>
                <h1 className='pageTitle'>Anna Poglitsch.</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px"
                }}>
                    <img
                        className='aboutMeImage'
                        alt={`HeroUI Image`}
                        src="https://heroui.com/images/hero-card-complete.jpeg"

                    />
                    <p aria-label= {languageContent.AboutMeText} className='aboutMeParagraph' >
                        {languageContent.AboutMeText}</p>
                </div>
                <div className='hobbyDiv'>
                    <h2 aria-label={languageContent.InFreizeitAboutMe} className='aboutMeFreeTime'>{languageContent.InFreizeitAboutMe}</h2>
                    <div className='cardInfo' style={{marginTop: "5%"}}>
                        {aboutMeCards.aboutMeCards.map(card => {
                            return (
                                <Card style={{ background: "white", width: "350px", height: "auto", fontSize: "20px" }}>
                                    <CardHeader aria-label={card.header} color="#E2E1CF" style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                                        <div className="flex flex-col">
                                            <p className="text-md">{card.header}</p>
                                        </div>
                                    </CardHeader>
                                    <Divider></Divider>
                                    <CardBody aria-label={card.body} style={{ height: "200px", paddingLeft: "10px" }}>
                                        <p>{card.body}</p>
                                    </CardBody>
                                    <CardFooter aria-label={card.footer} style={{ background: "#E2E1CF" }}>
                                        <Link href="https://github.com/frontio-ai/heroui" className="custom-link" >
                                            {card.footer}
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>

                </div>
            </div>
            <Footer languageChoice={languageContent} ></Footer>
        </div>
    )
}

export default AboutMe;