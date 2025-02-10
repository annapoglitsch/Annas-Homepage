import React, { useEffect} from "react";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/header.css"
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Header() {

  const [language, setLanguage] = useState("English");

  function changeButtonText() {
    setLanguage(language === "English" ? "Deutsch" : "English");
  }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="containerNav" fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link" href="/">Home</Nav.Link>
              <Nav.Link className="link" href="/aboutme">About Me</Nav.Link>
              <Nav.Link className="link" href="/mywork">My Work</Nav.Link>
              <Nav.Link className="link" href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button className="buttonHeader" onClick={changeButtonText} >{language}</Button>
        </Container>
      </Navbar>
    )
}
export default Header;