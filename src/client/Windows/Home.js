import React, { useEffect } from "react";
import { useState } from "react";
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
import { Accessibility } from 'grommet-icons'
import { useFetchLanguage } from "../static/UseEffect";

function Home() {


const [languageChoice, setLanguageChoice] = useState("EN");

const content = useFetchLanguage(languageChoice);


if (!content) {
  return <div>Loading...</div>; 
}
const languageContent = content.english[0];

  return (
    <Grommet>
      <Page className="mainPage">
        <HeaderTemp languageChoice={languageContent} />
        <PageHeader a11yTitle="Welcome" title={<Heading a11yTitle={languageContent.Willkommen} className="welcomeHome">{languageContent.Willkommen}</Heading>} margin={{ top: '13%' }} />
        
        <Box alignSelf="center" margin={{ left: '20%', top: '-4%' }}>
          <Text className="schnörkelSchrift" a11yTitle="">Anna Poglitsch.</Text>
        </Box>

        <Box direction="row" gap={"large"} pad={"medium"} margin={{ top: "25%" }}>
          <Box width="50%" height="auto" align="center">
            <Accessibility size="xxlarge" color="white" />
          </Box>

          <Box direction="column" width="40%" justify="center" gap="small">
            <Box pad={"large"} gap={"small"} border={{ color: "white", size: "medium", style: "solid" }} align="center">
              <Text a11yTitle={content.ÜberschriftHome1} className="headline">{languageContent.ÜberschriftHome1}</Text>
              <Text a11yTitle="" className="headline">{languageContent.ÜberschriftHome2}</Text>
              <Text a11yTitle="" className="headline">{languageContent.ÜberschriftHome3}</Text>
            </Box>

            <Box width={{ max: '600px' }} margin="auto" pad="small">
              <Paragraph a11yTitle={languageContent.TextHome} className="homeParagraph">
                {languageContent.TextHome}
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <FooterTemp languageChoice={languageContent} />
      </Page>
    </Grommet>
  );
}

export default Home;