import React from "react";
import { Link } from "@heroui/react";
import '../style/home.css';
import "../style/footer.css"
function Footer({languageChoice}) {
  return (
    <div className="containerFooter"
    >
      <h2 aria-label="Copyright 2025" className="copyright">
        Copyright © 2025
      </h2>
      <Link aria-label={languageChoice.FooterKontakt} href="/contact" className="custom-link">{languageChoice.FooterKontakt}</Link>
    </div>
  );
}

export default Footer;
