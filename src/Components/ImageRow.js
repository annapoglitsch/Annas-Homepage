import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function ImageRow(){
    return(
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
    )
   
}
export default ImageRow;