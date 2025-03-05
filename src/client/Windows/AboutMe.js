import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Grommet,
  Page,
  Heading,
  Box,
  PageHeader,
  Image,
  Paragraph,
  Text,
  Card,
  CardBody,
  CardFooter,
  CardHeader

} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import "../style/aboutme.css"
import "../style/main.css"
import hobbys from "../static/hobbyCard.json"

import English from "../static/English.json"
import German from "../static/German.json"


function AboutMe() {


  const [selectedLanguage, setSelectedLanguage] = React.useState("");


  const languageChoise = selectedLanguage === "EN" ? English.english : German.german;

 

  return (
    <Grommet >
      <Page style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/*Header */}
        <HeaderTemp selectedLanguage={setSelectedLanguage}></HeaderTemp>
        {languageChoise.map((content) => (
          <React.Fragment>
            <PageHeader a11yTitle="Welcome" title={
              <Heading size="xlarge" className="aboutMeTitle" a11yTitle="Who am I, find out.">Anna Poglitsch.</Heading>
            } alignSelf="center" />
            <Box direction="row" alignSelf='center' gap="xlarge">
            <Box >
              <Image a11yTitle="A picture." className="aboutMeImage"
                src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                style={{ width: "500px", height: "500px"}}
              />
            </Box>
              

              <Paragraph a11yTitle={content.AboutMeText} margin="none" style={{ color: "white", fontSize: "25px" }}>
                {content.AboutMeText}
              </Paragraph>
            </Box>
            <Box className="aboutMeBox">
              <Text className="hobbyText">{content.InFreizeitAboutMe}</Text>
              <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
                {hobbys.hobbys.map(card => {
                  return (<Card height="medium" width="medium" background="light-1" className="cardStyle">
                    <CardHeader pad="medium" className="fontCardStyle">{card.header} </CardHeader>
                    <CardBody pad="medium" style={{ fontSize: "20px" }}>{card.body}</CardBody>
                    <CardFooter pad={{ horizontal: "small" }} height={"xxsmall"} background="#D6C9B4" className="fontCardStyle">
                      {card.footer}
                    </CardFooter>
                  </Card>)
                })}
              </Box>
            </Box >
          </React.Fragment>
        ))}

        {/*Footer */}
        <FooterTemp language={selectedLanguage}></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default AboutMe;