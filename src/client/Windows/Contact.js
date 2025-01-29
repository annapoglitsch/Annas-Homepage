import React from "react";
import { } from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import {
  Heading,
  Grommet,
  Page,
  PageHeader,
  Box
} from "grommet";
import SendMessage from "../Components/SendMessage";
import "../style/contactme.css"
import "../style/main.css"

export function ContactWindowLocation() {

  return (
    <Grommet >
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Contact Me" title={
          <Heading size="xlarge" className="contactMeTitle">Contact Me.</Heading>
        } alignSelf="center" />
        <Box style={{paddingBottom: "10%"}}>
          <SendMessage></SendMessage>
        </Box>

        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default ContactWindowLocation
