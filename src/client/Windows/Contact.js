import React from "react";
import { } from "grommet";
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
export function ContactWindowLocation() {



  return (
    <Grommet>
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Contact Me" title={
          <Heading size="xlarge" className="contactMeTitle">Contact Me.</Heading>
        } alignSelf="center" />
        <Box style={{paddingBottom: "6%"}}>
          <SendMessage></SendMessage>
        </Box>
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center" style={{paddingBottom: "6%"}}>
          {contactMeCard.contactMeCard.map(card => {
            return (<Card height="medium" width="medium" background="light-1" className="cardStyle">
              <CardHeader pad="medium" className="fontCardStyle">{card.header} </CardHeader>
              <CardBody pad="medium" className="bodyCardStyle">{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }}  height={"xxsmall"} background="#D6C9B4"  className="fontCardStyle">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}


export default ContactWindowLocation
