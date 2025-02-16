import React from "react";
import { Link } from "@heroui/react";
import '../style/home.css';
import "../style/footer.css"
function Footer() {
  return (
    <div className="containerFooter"
    >
      <h2 aria-label="Copyright 2025" className="copyright">
        Copyright © 2025
      </h2>
      <Link aria-label="Link to Contact Me." href="/contact" className="custom-link">Contact</Link>
    </div>
  );
}

export default Footer;
