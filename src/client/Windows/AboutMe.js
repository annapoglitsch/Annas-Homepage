import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import cards from "../static/hobbyCards.json";
import Container from "react-bootstrap/esm/Container";
import "../style/aboutme.css"
import "../style/card.css"
import Image from 'react-bootstrap/Image';
import { useState } from "react";
import { useFetchLanguage } from "../static/UseEffect";

function AboutMe({ language, setLanguage }) {

        const content = useFetchLanguage(language);
    
    if (!content) {
        return <div>Loading...</div>;
      }
      const languageContent = content.language[0];

    return (
        <div>
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage}></Header>
            <div className="main-content">
                <h1 aria-label="About Me - Anna Poglitsch" className="titleFont">Anna Poglitsch.</h1>
                <div className="aboutMeContainer">
                    <Image className="imagePNG" src={"https://heroui.com/images/hero-card-complete.jpeg"} />
                    <p aria-label={languageContent.AboutMeText} className="aboutMeText">{languageContent.AboutMeText}</p>

                </div>
                <div className="aboutMeDiv">
                    <h2 aria-label={languageContent.InFreizeitAboutMe} className="aboutMeTitle">{languageContent.InFreizeitAboutMe}</h2>
                    <Container className="cardContainer" >
                        <Row className="myWorkRow g-4" style={{gap: "70px"}}>
                            {cards.hobbyCards.map((card, index) => {
                                return (
                                    <Col key={index} xs={12} sm={6} md={4} lg={3} >
                                        <Card style={{ width: "20rem", height: "22rem"}}>
                                            <Card.Body style={{ height: "18rem" }} className="card-body-flex">
                                                <Card.Title aria-label={card.header} className="text-card">{card.header}</Card.Title>
                                                <Card.Text aria-label={card.body}>
                                                    {card.body}
                                                </Card.Text>
                                                <Card.Footer aria-label={card.footer} className="cardFooter">
                                                    {card.footer}
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer languageChoice={languageContent}></Footer>
        </div>
    )
}
export default AboutMe;