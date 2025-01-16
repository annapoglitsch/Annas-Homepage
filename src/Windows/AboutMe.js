import React, { useState } from "react";
import {
  Grommet,
  Header,
  Page,
  Footer,
  Heading,
  Anchor,
  Text,
  Box,
  PageHeader,
  Image,
  Paragraph

} from "grommet";
import TabComponent from "../Components/Tab";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons'

function AboutMe() {
  return (
    <Grommet >
      <Page>
        {/*Header */}
        <Header background="#E2E1CF" gap={"small"} height={"xsmall"} direction="row">
          <Box><TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>
          <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"}>Anna Poglitsch</Text></Box>
        </Header>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Anna Poglitsch.</Heading>
        } alignSelf="center" />
        <Box direction="row">
          <Image margin={"small"}
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
          <Paragraph margin="none">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
        </Box>
        <Paragraph margin="small">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
        {/*Footer */}
        <Footer height={"xsmall"} background="#E2E1CF" pad="small">
          <Text margin={{ horizontal: "small" }} weight={"bold"} color={"#383C34"} a11yTitle="Copyright © 2025">Copyright © 2025</Text>
          <Box direction="row" align="center" gap="small">
            <Instagram color="plain" />
            <MailOption color="plain" />
          </Box>
          <Anchor
            margin={{ horizontal: "small" }}
            label="Contact Me"
            style={{ textDecoration: 'none' }}
            color={"#383C34"}
          />
        </Footer>
      </Page>
    </Grommet>
  );
}
export default AboutMe;