import React, { useState } from "react";
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
import { MailOption } from 'grommet-icons' 

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
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          <Card height="medium" width="medium" background="light-1" >
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2" height={"xxsmall"}>
              <Button> </Button>
            </CardFooter>
          </Card>

          <Card height="medium" width="medium" background="light-1">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                hoverIndicator
              />
              <Button hoverIndicator />
            </CardFooter>
          </Card>

          <Card height="medium" width="medium" background="light-1" >
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                hoverIndicator
              />
              <Button hoverIndicator />
            </CardFooter>
          </Card>
        </Box>
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          <Card height="medium" width="medium" background="light-1" >
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                hoverIndicator
              />
              <Button hoverIndicator />
            </CardFooter>
          </Card>

          <Card height="medium" width="medium" background="light-1">
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                hoverIndicator
              />
              <Button hoverIndicator />
            </CardFooter>
          </Card>

          <Card height="medium" width="medium" background="light-1" >
            <CardHeader pad="medium">Header</CardHeader>
            <CardBody pad="medium">Body</CardBody>
            <CardFooter pad={{ horizontal: "small" }} background="light-2">
              <Button
                hoverIndicator
              />
              <Button hoverIndicator />
            </CardFooter>
          </Card>
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