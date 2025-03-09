import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/header.css"
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function Header({ languageChoice, setLanguageChoice }) {

  const [language, setLanguage] = React.useState("EN");
  const [disabledButton, setDisabledButton] = useState("EN");

  const options = ["EN", "DE"];

  const handleLanguage = (event) => {
    const chosenLanguage = event.value;
    setLanguage(chosenLanguage);
    setLanguageChoice(chosenLanguage);
    localStorage.setItem("language", chosenLanguage); //speichert die Sprache am client
    setDisabledButton(chosenLanguage)
    localStorage.setItem("disabledButton", chosenLanguage)
  };

  async function sendSelectedLanguage() {
    const data = {
      selectedLanguage: language,
    };
    console.log("Data: ", language);
    const url = "http://localhost:5000/sendLanguage";
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("An error occurred: ", error);
    }
  }

  useEffect(() => {
    const savedDisabledButton = localStorage.getItem("disabledButton");
    if (savedDisabledButton) {
      setDisabledButton(savedDisabledButton);
    }
  }, []);

  useEffect(() => { //useEffect ist wie die "main", wird immer aufgerufen wenn geladen wird
    const savedLanguage = localStorage.getItem("language"); //hier holen wir uns die gespeicherte language
    if (savedLanguage) {
      setLanguage(savedLanguage); //und setzen sie wieder
      setLanguageChoice(savedLanguage);
    }
  }, []);

  useEffect(() => {
    sendSelectedLanguage();
  }, [language]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="containerNav" fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navHeader" aria-label={languageChoice.HeaderTitel1} href="/">{languageChoice.HeaderTitel1}</Nav.Link>
            <Nav.Link className="navHeader" aria-label={languageChoice.HeaderTitel2} href="/aboutme">{languageChoice.HeaderTitel2}</Nav.Link>
            <Nav.Link className="navHeader" aria-label={languageChoice.HeaderTitel3} href="/mywork">{languageChoice.HeaderTitel3}</Nav.Link>
            <Nav.Link className="navHeader" aria-label={languageChoice.HeaderTitel4} href="/contact">{languageChoice.HeaderTitel4}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          aria-label={`Choose your language. Current language: ${language}`}
          className="buttonHeader"
          onClick={() => handleLanguage({ value: "EN" })}
          disabled={disabledButton === "EN"}
        >
          EN
        </Button>
        <Button
          aria-label={`Choose your language. Current language: ${language}`}
          className="buttonHeader"
          onClick={() => handleLanguage({ value: "DE" })}
          disabled={disabledButton === "DE"}
        >
          DE
        </Button>
      </Container>
    </Navbar>
  )
}
export default Header;