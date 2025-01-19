import React from "react";
import Container from "react-bootstrap/Container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/footer.css"

function Footer() {
    return (
        <Container className="containerFooter" fluid>
            <h1 className="copyright">Copyright 2025 ©</h1>
          <h1 className="name ms-auto">Anna Poglitsch</h1>
        </Container>
    )
}
export default Footer;