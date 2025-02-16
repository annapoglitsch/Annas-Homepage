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

  var homePara = `Die Website weist einige barrierefreie Elemente auf, wie APCA entsprechende Farbkontraste und Schriftgrößen. 
                Zusätzlich ist die gesamte Seite Screenreader-friendly. Natürlich ist diese Seite weit entfernt von perfekt aber
                es wird laufen an der Verbesserung an barrierefreien Elementen gearbeitet.`;

  return (
    <Grommet>
      <Page className="mainPage">
        <HeaderTemp></HeaderTemp>

        <PageHeader a11yTitle="Welcome" title={
          <Heading a11yTitle="Welcome wishes Anna Poglitsch" className="welcomeHome">Welcome.</Heading>
        } margin={{ top: '13%' }} alignSelf="center" />

        <Box alignSelf="center" margin={{ left: '20%', top: '-4%' }}>
          <Text className="schnörkelSchrift" a11yTitle="">Anna Poglitsch.</Text>
        </Box>

        <Box direction="row" gap={"large"} pad={"medium"} margin={{ top: "25%" , }}>
          <Box width="50%" height="auto" align="center">
            <Accessibility size="xxlarge" color="white"></Accessibility>
          </Box>

          <Box direction="column" width="40%" justify="center" gap="small" margin={{}}>
            <Box pad={"large"} gap={"small"} border={{ color: "white", size: "medium", style: "solid" }} align="center">
              <Text a11yTitle="Warum ist diese Website Barrierefrei?" className="headline">Warum ist diese</Text>
              <Text a11yTitle="" className="headline"> Website</Text>
              <Text a11yTitle="" className="headline"> Barrierefrei?</Text>
            </Box>

            <Box width={{ max: '600px' }} margin="auto" pad="small">
              <Paragraph
              a11yTitle={homePara}
                className="homeParagraph"
              >
                {homePara}
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
