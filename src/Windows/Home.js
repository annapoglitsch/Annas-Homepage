import React from "react";
import {
  Box,
  Image,
  Heading,
  Grommet,
  Page,
  PageHeader,
  Anchor,
  Paragraph,
} from "grommet";
import FooterTemp from "../Components/Footer";
import HeaderTemp from "../Components/Header";

function Home() {
  return (
    <Grommet>
      <Page style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Welcome.</Heading>
        } alignSelf="center" />
        <Box direction="row" gap={"large"} alignSelf="center">
        <Anchor href="http://localhost:3000/mywork" label="Home" a11yTitle="Home" style={{ textDecoration: 'none', fontSize:"30px" }} color={"#383C34"} size="xlarge"></Anchor>
        <Anchor href="http://localhost:3000/aboutme" label="About Me" a11yTitle="About Me" style={{ textDecoration: 'none', fontSize:"30px"}} color={"#383C34"} size="xlarge"></Anchor>
          <Anchor href="http://localhost:3000/mywork" label="My Work" a11yTitle="Link to my Work" style={{ textDecoration: 'none', fontSize:"30px" }} color={"#383C34"} size="xlarge"></Anchor>
          <Anchor href="http://localhost:3000/contact" label="Contact" a11yTitle="Contact Me" style={{ textDecoration: 'none', fontSize:"30px" }} color={"#383C34"} size="xlarge"></Anchor>
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

        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default Home;
