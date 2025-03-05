import React from "react";
import { useEffect } from "react";
import {
  Box,
  Footer,
  Text,
  Anchor,
} from "grommet";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons'
import "../style/footer.css"
import English from "../static/English.json"
import German from "../static/German.json"

function FooterTemp({language}) {



  const languageChoise = language === "EN" ? English.english : German.german;

  useEffect(() => {
    console.log("FooterSelectedLanguage", language)
    console.log("LanguageChoiseFooter:", languageChoise)
  },
    [language, languageChoise]

  )

  return (

    <Footer className="footerMain">

      {languageChoise.map((content) => (
          <React.Fragment>
          <Text className="footerText" a11yTitle="Copyright 2025">Copyright © 2025</Text>
          <Box direction="row" align="center" gap="small" margin={"30px"}>
            <Instagram a11yTitle="Link to instagram" color="plain" />
            <MailOption a11yTitle="Contact me via Email" color="plain" />
          </Box>
          <Anchor
            a11yTitle={content.FooterKontakt}
            className="footerText"
            label={content.FooterKontakt}
          />
          </React.Fragment>
      ))}

    </Footer>

  )
}
export default FooterTemp;