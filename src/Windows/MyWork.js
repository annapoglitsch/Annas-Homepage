import React from "react";
import Header from "../Components/Header";
import "../style/mywork.css";
import Footer from "../Components/Footer";
import cards from "../static/Card.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function MyWork() {
    return (
        <div>
            <Header></Header>
            <div className="main-contentDiv">
                <h1 className="workFont">Let's Talk About Work.</h1>
                <Container>
                    <Row className="myWorkRow justify-content-center g-4">
                        {cards.cards.map((card, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Body>
                                            <Card.Title>{card.header || "Card Title"}</Card.Title>
                                            <Card.Text>
                                                {card.body || "Some quick example text to build on the card title and make up the bulk of the card's content."}
                                            </Card.Text>
                                            <Button className="buttonWork">read more</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className="myWorkRow justify-content-center g-4">
                        {cards.cardsTwo.map((card, index) => {
                            return (
                                <Col key={index} xs={12} sm={6} md={4} lg={3}>
                                    <Card style={{ width: "18rem" }}>
                                        <Card.Body>
                                            <Card.Title>{card.header || "Card Title"}</Card.Title>
                                            <Card.Text>
                                                {card.body || "Some quick example text to build on the card title and make up the bulk of the card's content."}
                                            </Card.Text>
                                            <Button className="buttonWork">read more</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>

            </div>
            <Footer></Footer>
        </div>
    )
}
export default MyWork; 