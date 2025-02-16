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

function Header(){

  const [language, setLanguage] = useState("English");

  function handleLanguageChange(){
    setLanguage(language === "English" ? "Deutsch" : "English");
  }

    return(
        <div className="headerDiv">
        <Navbar >
          <NavbarContent style={{ display: 'flex', justifyContent: "flex-start", listStyle: "none" }}>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label="Home" href="/" className="custom-link">Home</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label="About Me" href="/aboutme" className="custom-link">About Me</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label="My Work" href="/mywork" className="custom-link">My Work</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link aria-label="Contact Me" href="/contact" className="custom-link">Contact Me</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div style={{marginRight:"2%", alignItems: "center"}}>
          
        <Button aria-label="Choose your language. Current language: Englisch" className="mainButton" onClick={handleLanguageChange}>{language}</Button>
        </div>

      </div>
    )
}
export default Header;