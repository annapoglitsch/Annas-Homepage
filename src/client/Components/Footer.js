import React from "react";
import { Link } from "@heroui/react";
import '../style/home.css';

function Footer() {
  return (
    <div className="containerFooter"
    >
      <h2 className="copyright">
        Copyright © 2025
      </h2>
      <Link href="/contact" className="custom-link">Contact</Link>
    </div>
  );
}

export default Footer;
