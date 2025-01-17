import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Grommet,
  Header,
  Page,
  PageHeader,
  Footer,
  Text,
  Anchor,
  Paragraph,
  DataTable,
  Data,
  Toolbar,
  DataSearch
} from "grommet";
import TabComponent from "../Components/Tab";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons'

function App() {
  return (
    <Grommet>
      <Page>
        <Header background="#E2E1CF" gap={"small"} height={"xsmall"} direction="row" >
          <Box margin={"medium"}><TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>
          
          <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"}>Anna Poglitsch</Text></Box>
        </Header>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Welcome.</Heading>
        } alignSelf="center" />
        <Box direction="row" gap={"large"} alignSelf="center">
          <Anchor href="http://localhost:3000/mywork" label="My Work" a11yTitle="Link to my Work" style={{ textDecoration: 'none' }} color={"#383C34"} size="xlarge"></Anchor>
          <Anchor href="http://localhost:3000/aboutme" label="About Me" a11yTitle="About Me" style={{ textDecoration: 'none' }} color={"#383C34"} size="xlarge"></Anchor>
          <Anchor href="http://localhost:3000/contact" label="Contact" a11yTitle="Contact Me" style={{ textDecoration: 'none' }} color={"#383C34"} size="xlarge"></Anchor>
        </Box>
        <Box direction="row" gap={"medium"} alignSelf="center" pad={"medium"}>
          <Box direction="column" gap="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Paragraph>
          </Box>
          <Box direction="column" gap="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Paragraph>
          </Box>
          <Box direction="column" gap="small">
            <Image
              fit="cover"
              src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            />
            <Paragraph margin="none">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </Paragraph>
          </Box>
        </Box>

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


export default App;
