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
            <Nav.Link aria-label=" Link to Home"  href="/">Home</Nav.Link>
              <Nav.Link aria-label="Link to About Me"  href="/aboutme">About Me</Nav.Link>
              <Nav.Link aria-label="Link to My Work"  href="/mywork">My Work</Nav.Link>
              <Nav.Link aria-label="Link to Contact Me"  href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button aria-label="Choose your language. Current language: English" className="buttonHeader" onClick={changeButtonText} >{language}</Button>
        </Container>
      </Navbar>
    )
}
export default Header;