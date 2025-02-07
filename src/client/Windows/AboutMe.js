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
function AboutMe() {
    return (
        <div>
            <Header></Header>
            <div className="main-content">
                <h1 className="titleFont">Anna Poglitsch.</h1>
                <div className="aboutMeContainer">
                    <Image className="imagePNG" src={"https://heroui.com/images/hero-card-complete.jpeg"} />
                    <p className="aboutMeText">Im Zuge meiner Schullaufbahn habe ich meine Neugier für Technik, Datenverarbeitung und dessen Schutz entdeckt. Meine ersten Berührungspunkte habe ich in der Unterstufe in der Übung Informatik gemacht, was dazu geführt hat, dass ich mich anschließend für den Realzweig und für meine derzeitige Ausbildung entschieden habe. Das Studium Computer Science and Digital Communication vereint alle Themenbereiche, die ich näher kennenlernen will und in weiterer Folge beherrschen. Seit her begleitet mich Mathematik, Programmieren und verschiedenste Team-Projekte täglich durch mein Leben. Ich habe gelernt mich an neue Funktionsabläufe anzupassen, konsequent an meinem Ziel zu bleiben und wenn nötig, nach Hilfe zu fragen. Neben meinem Studium, arbeite ich geringfügig bei der ITSV, wo ich Gelerntes in die Realität umsetzen darf.</p>

                </div>
                <div className="aboutMeDiv">
                    <h2 className="aboutMeTitle">In my free time I like to...</h2>
                    <Container className="card-container" >
                        <Row className="myWorkRow g-4">
                            {cards.hobbyCards.map((card, index) => {
                                return (
                                    <Col key={index} xs={12} sm={6} md={4} lg={3} >
                                        <Card style={{ width: "20rem", height: "22rem" }}>
                                            <Card.Body style={{ height: "18rem" }} className="card-body-flex">
                                                <Card.Title className="text-card">{card.header}</Card.Title>
                                                <Card.Text >
                                                    {card.body}
                                                </Card.Text>
                                                <Card.Footer className="cardFooter">
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
            <Footer></Footer>
        </div>
    )
}
export default AboutMe;