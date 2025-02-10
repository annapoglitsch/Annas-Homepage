import React, { useEffect, useState} from "react";

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../style/card.css"

function CardWork({searchValue, filterValue}){

    const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    console.log("CardFront", JSON.stringify({ searchInput: searchValue, filterValue: filterValue }))


    fetch("http://localhost:5000/mywork", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },

      body: JSON.stringify({ searchInput: searchValue, filterValue: filterValue })
    }
    ).then((response) => response.json())
      .then(data => setFilteredCards(data))
      .then(error => console.error("Error while fetching data:", error))

  },
    [searchValue, filterValue]
  );

  useEffect(() => {
          console.log("CardUseEffectSearch:", searchValue);
          console.log("CardUseEffectFilter: ", filterValue)
      }, [searchValue, filterValue])

    return(
        <Container className="card-container" >
                    <Row className="myWorkRow g-4">
                {filteredCards.length > 0 ? ( 
                    filteredCards.map((card, index) => ( 
                        <Col key={index} xs={12} sm={6} md={4} lg={3}>
                            <Card style={{ width: "20rem", height: "22rem" }}>
                                <Card.Body style={{ height: "18rem" }} className="card-body-flex">
                                    <Card.Title className="text-card">{card.header}</Card.Title>
                                    <Card.Text className="bodyCardText">{card.body}</Card.Text>
                                    <Card.Footer className="cardFooter">{card.footer}</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p style={{ textAlign: "center", width: "100%", color: "white", fontSize: "30px" }}>Keine Karten gefunden.</p> 
                )}
            </Row>

    </Container>
    )
}
export default CardWork;