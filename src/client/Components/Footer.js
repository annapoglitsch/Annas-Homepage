import React from "react";
import {
    Box,
    Footer,
    Text,
    Anchor,
  } from "grommet";
  import { Instagram } from 'grommet-icons';
  import { MailOption } from 'grommet-icons'
  import "../style/footer.css"
  
function FooterTemp(){
    return(
        <Footer  className="footerMain">
          <Text className="footerText"  a11yTitle="Copyright 2025">Copyright © 2025</Text>
          <Box direction="row" align="center" gap="small" margin={"30px"}>
            <Instagram a11yTitle="Link to instagram" color="plain" />
            <MailOption a11yTitle="Contact me via Email" color="plain" />
          </Box>
          <Anchor
          a11yTitle="Link to Contact Me site."
          className="footerText"
            label="Contact Me"
          />
        </Footer>
    )
}
export default FooterTemp;