import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import { color } from 'framer-motion';

function Home() {
  return (
    <div style={{ backgroundColor: "#F7F6E3", minHeight: "100vh" }}>
      {/* Header Section */}
      <div style={{ backgroundColor: "#E2E1CF", height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
        <Navbar style={{ height: "80px" }}>
          <NavbarContent style={{ display: 'flex', justifyContent: "start", listStyle: "none" }}>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/" style={{ fontWeight: "600", fontSize: "25px", textDecoration: "none", color: "black" }}>Home</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/aboutme" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>About Me</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/mywork" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>My Work</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/contact" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>Contact Me</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <h2 style={{ fontSize: "25px", fontWeight: "600", fontFamily: "serif" }}>Anna Poglitsch</h2>

      </div>

      {/* Welcome Section */}
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1 style={{ fontSize: "100px", fontWeight: "400", fontFamily: "serif", color: "#383C34" }}>Welcome.</h1>
      </div>

      <div style={{ height: "auto", display: "flex", justifyContent: "center", padding: "10px", marginTop: "80px" }}>
        <Navbar style={{ height: "80px", }}>
          <NavbarContent style={{ display: 'flex', justifyContent: "center", listStyle: "none" }}>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/" style={{ fontWeight: "600", fontSize: "25px", textDecoration: "none", color: "black" }}>Home</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/aboutme" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>About Me</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/mywork" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>My Work</Link>
            </NavbarItem>
            <NavbarItem style={{ fontSize: "30px", fontFamily: "serif" }}>
              <Link href="/contact" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600", color: "black" }}>Contact Me</Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Image and Text Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "10px",
        gap: "30px",
      }}>
        {[...Array(3)].map((_, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "300px" }}>
            <img
              alt={`HeroUI Image ${index + 1}`}
              src="https://heroui.com/images/hero-card-complete.jpeg"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "15px", fontFamily: "serif", textAlign: "center" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div style={{
        backgroundColor: "#E2E1CF",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        marginTop: "300px"
      }}>
        <h2 style={{ fontSize: "25px", fontWeight: "600", fontFamily: "serif" }}>Copyright © 2025</h2>
        <Link href="/contact" style={{
          textDecoration: "none",
          fontSize: "25px",
          fontWeight: "600",
          color: "black"
        }}>Contact</Link>
      </div>
    </div>
  );
}

export default Home;
