import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {Link} from "@heroui/react";
import "../Windows/home.css"
function Header(){
    return(
        <div style={{ backgroundColor: "#E2E1CF", height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
        <Navbar style={{ height: "80px" }}>
          <NavbarContent style={{ display: 'flex', justifyContent: "start", listStyle: "none" }}>
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
        <h2 style={{ fontSize: "25px", fontWeight: "600", fontFamily: "serif" }}>Anna Poglitsch</h2>

      </div>
    )
}
export default Header;