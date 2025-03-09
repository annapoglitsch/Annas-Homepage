import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Footer,
  Text,
  Anchor,
} from "grommet";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons'
import "../style/footer.css"
import { useFetchLanguage } from "../static/UseEffect";

function FooterTemp() {
  const [languageChoice, setLanguageChoice] = useState("EN");
  
  const content = useFetchLanguage(languageChoice);

  if (!content) {
    return <div>Loading...</div>; // Show loading state until the content is loaded
  }

  return (
    <Footer className="footerMain">
      <Text className="footerText" a11yTitle="Copyright 2025">Copyright © 2025</Text>
      <Box direction="row" align="center" gap="small" margin={"30px"}>
        <Instagram a11yTitle="Link to Instagram" color="plain" />
        <MailOption a11yTitle="Contact me via Email" color="plain" />
      </Box>
      <Anchor a11yTitle={content.FooterKontakt} className="footerText" label={content.FooterKontakt} />
    </Footer>
  );
}

export default FooterTemp;