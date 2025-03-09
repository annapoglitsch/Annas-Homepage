import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import Footer from "../Components/Footer";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";
import { useFetchLanguage } from "../static/UseEffect";

function Home({ language, setLanguage }) {

    const content = useFetchLanguage(language);


    if (!content) {
        return <div>Loading...</div>;
    }
    const languageContent = content.language[0];

    return (
        <div>
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage} ></Header>
            <div className="main-content">
                <h1 aria-label={languageContent.Willkommen} className="welcomeFont">{languageContent.Willkommen}</h1>
                <div className="annapoglitschdiv">
                    <h2 aria-label="" className="annapoglitsch">Anna Poglitsch</h2>
                </div>
                <Row className="mainContainer">
                    <Container className="iconContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="a500" height="500" fill="currentColor" class="bi bi-universal-access" viewBox="0 0 16 16" color="white">
                            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z" />
                        </svg>
                    </Container>

                    <Col className="mainTextContainer">
                        <Container className="headlineTextContainer mt-3 mb-3 p-3">
                            <p aria-label="Warum ist diese Website Barrierefrei?" className="headlineText">
                                {languageContent.ÜberschriftHome1} {languageContent.ÜberschriftHome2}
                            </p>
                            <p className="headlineText">{languageContent.ÜberschriftHome3}</p>

                        </Container>
                        <Container className="explainTextContainer">
                            <p aria-label={languageContent.TextHome} className="explainText">
                                {languageContent.TextHome}
                            </p>
                        </Container>
                    </Col>

                </Row>
            </div>
            <Footer languageChoice={languageContent} ></Footer>
        </div>
    )
}
export default Home;