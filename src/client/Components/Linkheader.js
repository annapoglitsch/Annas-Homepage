import React from "react";
import "../style/home.css"
import Nav from 'react-bootstrap/Nav';

function LinkHeader(){
    return(
        <Nav className="temp">
              <Nav.Link aria-label=" Link to Home" className="linkd" href="/">Home</Nav.Link>
              <Nav.Link aria-label="Link to About Me" className="linkd" href="/aboutme">About Me</Nav.Link>
              <Nav.Link aria-label="Link to My Work" className="linkd" href="/mywork">My Work</Nav.Link>
              <Nav.Link aria-label="Link to Contact Me" className="linkd" href="/contact">Contact</Nav.Link>
            </Nav>
    )
}
export default LinkHeader;