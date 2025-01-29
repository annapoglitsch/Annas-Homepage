import React from "react";
import {
  Box,
  Image,
  Heading,
  Grommet,
  Page,
  PageHeader,
  Text,
  Paragraph,
} from "grommet";
import FooterTemp from "../Components/Footer";
import HeaderTemp from "../Components/Header";
import "../style/home.css"
import "../style/main.css"
import {Accessibility} from 'grommet-icons'

function Home() {
  return (
    <Grommet>
      <Page className="mainPage">
        <HeaderTemp></HeaderTemp>

        <PageHeader a11yTitle="Welcome" title={
          <Heading className="welcomeHome">Welcome.</Heading>
        } margin={{ top: '13%' }} alignSelf="center" />

        <Box alignSelf="center" margin={{ left: '20%', top: '-4%' }}>
          <Text className="schnörkelSchrift">Anna Poglitsch.</Text>
        </Box>

        <Box direction="row" gap={"large"} pad={"medium"} margin={{ top: "25%" , }}>
          <Box width="50%" height="auto" align="center">
            <Accessibility size="xxlarge" color="white"></Accessibility>
          </Box>

          <Box direction="column" width="40%" justify="center" gap="small" margin={{}}>
            <Box pad={"large"} gap={"small"} border={{ color: "white", size: "medium", style: "solid" }} align="center">
              <Text className="headline">Warum ist diese</Text>
              <Text className="headline"> Website</Text>
              <Text className="headline"> Barrierefrei?</Text>
            </Box>

            <Box width={{ max: '600px' }} margin="auto" pad="small">
              <Paragraph
                className="homeParagraph"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula
                accumsan turpis, sit amet vehicula sapien lacinia non. Duis pharetra quam at
                lorem malesuada, id cursus ipsum tincidunt.
              </Paragraph>
            </Box>
          </Box>
        </Box>
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default Home;
