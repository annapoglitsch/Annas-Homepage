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
              <Link href="/" className="custom-link">Home</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/aboutme" className="custom-link">About Me</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/mywork" className="custom-link">My Work</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/contact" className="custom-link">Contact Me</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div style={{marginRight:"2%", alignItems: "center"}}>
          
        <Button className="mainButton" onClick={handleLanguageChange}>{language}</Button>
        </div>

      </div>
    )
}
export default Header;