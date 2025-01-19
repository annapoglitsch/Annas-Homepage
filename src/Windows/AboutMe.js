import React from "react";
import {
  Grommet,
  Page,
  Heading,
  Box,
  PageHeader,
  Image,
  Paragraph

} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";

function AboutMe() {
  return (
    <Grommet >
      <Page>
        {/*Header */}
        <HeaderTemp></HeaderTemp>
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
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default AboutMe;