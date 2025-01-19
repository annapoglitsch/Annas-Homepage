import React from "react";
import {Link} from "@heroui/react";
import '../Windows/home.css'

function Footer(){
    return(
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
            <Link href="/contact" className="custom-link" >Contact</Link>
          </div>
    )
}
export default Footer;