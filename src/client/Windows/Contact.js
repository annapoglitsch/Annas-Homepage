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
import { Send } from "grommet-icons";

export function ContactWindowLocation() {

  return (
    <Grommet >
      <Page style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Contact Me.</Heading>
        } alignSelf="center" />
        <Box style={{paddingBottom: "200px"}}>
          <SendMessage></SendMessage>
        </Box>

        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default ContactWindowLocation
