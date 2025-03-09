import React, { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {Button, Link} from "@heroui/react";
import "../style/home.css"
import "../style/header.css"
import "../style/main.css"
import { useEffect } from "react";

function Header({languageChoice, setLanguageChoice}){

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

    return(
        <div className="headerDiv">
        <Navbar >
          <NavbarContent style={{ display: 'flex', justifyContent: "flex-start", listStyle: "none" }}>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label={languageChoice.HeaderTitel1} href="/" className="custom-link">{languageChoice.HeaderTitel1}</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label={languageChoice.HeaderTitel2} href="/aboutme" className="custom-link">{languageChoice.HeaderTitel2}</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label={languageChoice.HeaderTitel3} href="/mywork" className="custom-link">{languageChoice.HeaderTitel3}</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label={languageChoice.HeaderTitel4} href="/contact" className="custom-link">{languageChoice.HeaderTitel4}</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div style={{marginRight:"2%", alignItems: "center"}}>
          
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
        </div>

      </div>
    )
}
export default Header;