import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import DressImage from "../Images/Dress.png"
import "../style/home.css"

function Images(){
    return(
        <Container className="imageContainer">
      <Row className="g-4">
        <Col xs={6} md={4}>
          <Image className="imagePNG" src={"https://heroui.com/images/hero-card-complete.jpeg"}/>
          <p className="image-with-text">Bitte 1 für Anna</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={"https://heroui.com/images/hero-card-complete.jpeg"} className="imagePNG" />
          <p className="image-with-text">Bitte 1 für Manu</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={"https://heroui.com/images/hero-card-complete.jpeg"} className="imagePNG" />
          <p className="image-with-text">Bitte 1 für Stefan</p>
        </Col>
      </Row>
    </Container>
    )
}
export default Images;