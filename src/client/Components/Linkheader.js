import React from "react";
import "../style/home.css"
import Nav from 'react-bootstrap/Nav';

function LinkHeader(){
    return(
        <Nav className="temp">
              <Nav.Link className="linkd" href="/">Home</Nav.Link>
              <Nav.Link className="linkd" href="/aboutme">About Me</Nav.Link>
              <Nav.Link className="linkd" href="/mywork">My Work</Nav.Link>
              <Nav.Link className="linkd" href="/contact">Contact</Nav.Link>
            </Nav>
    )
}
export default LinkHeader;