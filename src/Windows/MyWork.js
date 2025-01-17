import React, { useEffect, useState } from "react";
import { Moon, Sun } from "grommet-icons";
import {
  Grommet,
  Header,
  Page,
  Footer,
  Anchor,
  Text,
  Box,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
  PageHeader,
  Heading,
  grommet,
  Main
} from "grommet";
import { deepMerge } from "grommet/utils";
import TabComponent from "../Components/Tab";
import CardTemplate from "../Components/CardTemp";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons';
import cards from "../static/Card.json"
import cardsTwo from "../static/Card.json"

function MyWork() {
  return ( 
    <Grommet >
      <Page>
        {/*Header */}
        <Header background="#E2E1CF" gap={"small"} height={"xsmall"} direction="row">
          <Box><TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>
          <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"}>Anna Poglitsch</Text></Box>
        </Header>
        <PageHeader a11yTitle="Let's Talk About Work." title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Let's Talk About Work.</Heading>
        } alignSelf="center" />

        {/*Cards */}
        <Box direction="column" pad={"medium"} gap={"xlarge"} alignSelf="center">
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cards.cards.map(card => {
            return (<Card height="medium" width="medium" background="light-1" >
              <CardHeader pad="medium"  weight="bold">{card.header}</CardHeader>
              <CardBody pad="medium">{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} height={"xxsmall"} background="#E2E1CF">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cardsTwo.cardsTwo.map(card => {
            return (<Card height="medium" width="medium" background="light-1" >
              <CardHeader pad="medium" weight="bold">{card.header}</CardHeader>
              <CardBody pad="medium">{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} height={"xxsmall"} background="#E2E1CF">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        </Box>
        {/*Footer */}
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
export default MyWork