import React, { useEffect } from "react";
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
import English from "../static/English.json"
import German from "../static/German.json"

function Home() {

  const [selectedLanguage, setSelectedLanguage] = React.useState("EN");


  const languageChoise = selectedLanguage === "EN" ? English.english : German.german;
  
 useEffect(() => {
    console.log("HomeSelectedLanguage", selectedLanguage)
    console.log("LanguageChoise:", languageChoise)
  },
    [selectedLanguage, languageChoise]

  )
  return (
    <Grommet>
      <Page className="mainPage">
        <HeaderTemp selectedLanguage={setSelectedLanguage}></HeaderTemp>
        {languageChoise.map((content) => (
          <React.Fragment>
            <PageHeader a11yTitle="Welcome" title={
              <Heading a11yTitle={content.Willkommen} className="welcomeHome">{content.Willkommen}</Heading>
            } margin={{ top: '13%' }}/>

            <Box alignSelf="center" margin={{ left: '20%', top: '-4%' }}>
              <Text className="schnörkelSchrift" a11yTitle="">Anna Poglitsch.</Text>
            </Box>

            <Box direction="row" gap={"large"} pad={"medium"} margin={{ top: "25%", }}>
              <Box width="50%" height="auto" align="center">
                <Accessibility size="xxlarge" color="white"></Accessibility>
              </Box>

              <Box direction="column" width="40%" justify="center" gap="small" margin={{}}>
                <Box pad={"large"} gap={"small"} border={{ color: "white", size: "medium", style: "solid" }} align="center">
                  <Text a11yTitle={content.ÜberschriftHome1} className="headline">{content.ÜberschriftHome1}</Text>
                  <Text a11yTitle="" className="headline"> {content.ÜberschriftHome2}</Text>
                  <Text a11yTitle="" className="headline">{content.ÜberschriftHome3} </Text>
                </Box>

                <Box width={{ max: '600px' }} margin="auto" pad="small">
                  <Paragraph
                    a11yTitle={content.TextHome}
                    className="homeParagraph"
                  >
                    {content.TextHome}
                  </Paragraph>
                </Box>
              </Box>
            </Box>
          </React.Fragment>
        ))}

        <FooterTemp language={selectedLanguage}></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default Home;
