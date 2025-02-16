import React from "react";
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/footer.css"
import NavLink from "react-bootstrap/esm/NavLink";

function Footer() {
    return (
        <Container className="containerFooter" fluid>
            <h1 aria-label="Copyright 2025" className="copyright">Copyright © 2025</h1>
          <NavLink aria-label="Link to Contact Me" className="linkFooter" href="/contact">Contact Me</NavLink>
        </Container>
    )
}
export default Footer;