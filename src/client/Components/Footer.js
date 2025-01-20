import React from "react";
import {
    Box,
    Footer,
    Text,
    Anchor,
  } from "grommet";
  import { Instagram } from 'grommet-icons';
  import { MailOption } from 'grommet-icons'
  
function FooterTemp(){
    return(
        <Footer height={"xsmall"} background="#E2E1CF" pad="small">
          <Text margin={{ horizontal: "small" }} weight={"bold"} style={{fontSize: "30px"}} color={"#383C34"} a11yTitle="Copyright © 2025">Copyright © 2025</Text>
          <Box direction="row" align="center" gap="small">
            <Instagram color="plain" />
            <MailOption color="plain" />
          </Box>
          <Anchor
            margin={{ horizontal: "small" }}
            label="Contact Me"
            style={{ textDecoration: 'none', fontSize: "30px" }}
            color={"#383C34"}
          />
        </Footer>
    )
}
export default FooterTemp;