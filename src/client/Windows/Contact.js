import React from "react";
import { } from "grommet";
import { useState } from "react";
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
import { useFetchLanguage } from "../static/UseEffect";

export function ContactWindowLocation({ language, setLanguage }) {
  const [languageChoice, setLanguageChoice] = useState("EN");

  const content = useFetchLanguage(language);


  if (!content) {
    return <div>Loading...</div>;
  }
  const languageContent = content.language[0];


  return (
    <Grommet>
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp languageChoice={languageContent} setLanguageChoice={setLanguage}></HeaderTemp>
        <PageHeader a11yTitle={languageContent.ContactMeTitel} title={
          <Heading size="xlarge" className="contactMeTitle">{languageContent.ContactMeTitel}</Heading>
        } alignSelf="center" />
        <Box style={{ paddingBottom: "6%" }}>
          <SendMessage languageChoice={languageContent}></SendMessage>
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
        {/*Footer */}
        <FooterTemp languageChoice={languageContent}></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default ContactWindowLocation
