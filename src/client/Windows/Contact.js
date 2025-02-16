import React from "react";
import Header from "../Components/Header";
import "../style/home.css"
import Footer from "../Components/Footer";
import "../style/home.css"
import ContactMe from "../Components/ContactMe"
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import cards from "../static/contactMe.json"
import "../style/card.css"

function Contact() {
    return (
        <div>
            <Header></Header>
            <div className="divMAin">
                <div style={{marginTop: "20%", justifyContent: "center", marginBottom: "10%"}}>
                    <h1 aria-label="Contact Me" className="fontwelcome">Contact Me.</h1>
                    <ContactMe></ContactMe>
                </div>

                <div className="contactCardDiv">
                    <Container className="card-container" >
                        <Row className="contactMeRow g-4" style={{ marginBottom: "5%", gap: "5%", width: "100%"}}>
                            {cards.contactMeCards.map((card, index) => {
                                return (
                                    <Col key={index} xs={12} sm={6} md={4} lg={3} >
                                        <Card style={{ minWidth: "20rem", height: "22rem" }}>
                                            <Card.Body style={{ height: "18rem"}} className="card-body-flex">
                                                <Card.Title aria-label={card.header} className="text-card">{card.header}</Card.Title>
                                                <Card.Text aria-label={card.body}  className="bodyCardText" >
                                                    {card.body}
                                                </Card.Text>
                                                <Card.Footer aria-label={card.footer}  className="cardFooter">
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
export default Contact;