import React from "react";
import { } from "grommet";
import { useEffect } from "react";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import {
  Heading,
  Grommet,
  Page,
  PageHeader,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "grommet";
import SendMessage from "../Components/SendMessage";
import "../style/contactme.css"
import "../style/main.css"
import contactMeCard from "../static/ContactMeCard.json"
import English from "../static/English.json"
import German from "../static/German.json"

export function ContactWindowLocation() {



  const [selectedLanguage, setSelectedLanguage] = React.useState("");


  const languageChoise = selectedLanguage === "EN" ? English.english : German.german;

  useEffect(() => {
      console.log("Contact", selectedLanguage)
      console.log("ContactM;e:", languageChoise)
    },
      [selectedLanguage, languageChoise])

  return (
    <Grommet>
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp selectedLanguage={setSelectedLanguage}></HeaderTemp>
        {languageChoise.map((content) => (
          <React.Fragment>
            <PageHeader a11yTitle={content.ContactMeTitel} title={
              <Heading size="xlarge" className="contactMeTitle">{content.ContactMeTitel}</Heading>
            } alignSelf="center" />
            <Box style={{ paddingBottom: "6%" }}>
              <SendMessage language={selectedLanguage}></SendMessage>
            </Box>
            <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center" style={{ paddingBottom: "6%" }}>
              {contactMeCard.contactMeCard.map(card => {
                return (<Card height="medium" width="medium" background="light-1" className="cardStyle">
                  <CardHeader a11yTitle={card.header} pad="medium" className="fontCardStyle">{card.header} </CardHeader>
                  <CardBody a11yTitle={card.body} pad="medium" className="bodyCardStyle">{card.body}</CardBody>
                  <CardFooter a11yTitle={card.footer} pad={{ horizontal: "small" }} height={"xxsmall"} background="#D6C9B4" className="fontCardStyle">
                    {card.footer}
                  </CardFooter>
                </Card>)
              })}
            </Box>
          </React.Fragment>
        ))}
        {/*Footer */}
        <FooterTemp language={selectedLanguage}></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default ContactWindowLocation
