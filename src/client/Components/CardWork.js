import React from "react";

import cards from "../static/Card.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../style/card.css"
function CardWork(){
    return(
        <Container className="card-container" >
        <Row className="myWorkRow g-4">
            {cards.cards.map((card, index) => {
                return (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} >
                        <Card style={{ width: "20rem", height: "22rem"}}>
                            <Card.Body style={{height: "18rem"}} className="card-body-flex">
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
    )
}
export default CardWork;