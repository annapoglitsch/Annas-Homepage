import React, { useState } from "react";
import {
  Grommet,
  Header,
  Page,
  Footer,
  Heading,
  Anchor,
  Text,
  Box,
  PageHeader,
  Image,
  Paragraph

} from "grommet";
import TabComponent from "../Components/Tab";
import { Instagram } from 'grommet-icons';
import { MailOption } from 'grommet-icons'

function AboutMe() {
  return (
    <Grommet >
      <Page>
        {/*Header */}
        <Header background="#E2E1CF" gap={"small"} height={"xsmall"} direction="row">
          <Box><TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>
          <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"}>Anna Poglitsch</Text></Box>
        </Header>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Anna Poglitsch.</Heading>
        } alignSelf="center" />
        <Box direction="row">
          <Image margin={"small"}
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />
          <Paragraph margin="none">
          Im Zuge meiner Schullaufbahn habe ich meine Neugier für Technik, Datenverarbeitung und dessen Schutz entdeckt. 
          Meine ersten Berührungspunkte habe ich in der Unterstufe in der Übung Informatik gemacht, was dazu geführt hat, 
          dass ich mich anschließend für den Realzweig und für meine derzeitige Ausbildung entschieden habe. 
          Das Studium Computer Science and Digital Communication vereint alle Themenbereiche, die ich näher kennenlernen will und in weiterer Folge beherrschen. 
          Seit her begleitet mich Mathematik, Programmieren und verschiedenste Team-Projekte täglich durch mein Leben. Ich habe gelernt mich an neue Funktionsabläufe anzupassen, 
          konsequent an meinem Ziel zu bleiben und wenn nötig, nach Hilfe zu fragen.
          Neben meinem Studium, arbeite ich geringfügig bei der ITSV, wo ich Gelerntes in die Realität umsetzen darf. 
          </Paragraph>
        </Box>
        <Paragraph margin="small">
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Paragraph>
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
export default AboutMe;