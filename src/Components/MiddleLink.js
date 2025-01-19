import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import {Link} from "@heroui/react";
import "../Windows/home.css"
function MiddleLink(){
return(
    <div style={{ height: "auto", display: "flex", justifyContent: "center", padding: "10px", marginTop: "80px" }}>
        <Navbar style={{ height: "80px", }}>
          <NavbarContent style={{ display: 'flex', justifyContent: "center", listStyle: "none" }}>
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
      </div>
)
}
export default MiddleLink