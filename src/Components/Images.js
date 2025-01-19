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
          <Image className="imagePNG" src={DressImage}/>
          <p className="image-with-text">Beautiful Dress</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={DressImage} className="imagePNG" />
          <p className="image-with-text">Beautiful Dress</p>
        </Col>
        <Col xs={6} md={4}>
          <Image src={DressImage} className="imagePNG" />
          <p className="image-with-text">Beautiful Dress</p>
        </Col>
      </Row>
    </Container>
    )
}
export default Images;