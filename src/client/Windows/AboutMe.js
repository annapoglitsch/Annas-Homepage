import React from "react";
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

function AboutMe() {

  var aboutMeParagraph = `Im Zuge meiner Schullaufbahn habe ich meine Neugier für Technik, Datenverarbeitung und dessen Schutz entdeckt.
  Meine ersten Berührungspunkte habe ich in der Unterstufe in der Übung Informatik gemacht, was dazu geführt hat,
  dass ich mich anschließend für den Realzweig und für meine derzeitige Ausbildung entschieden habe.
  Das Studium Computer Science and Digital Communication vereint alle Themenbereiche, die ich näher kennenlernen will und in weiterer Folge beherrschen.
  Seit her begleitet mich Mathematik, Programmieren und verschiedenste Team-Projekte täglich durch mein Leben. Ich habe gelernt mich an neue Funktionsabläufe anzupassen,
  konsequent an meinem Ziel zu bleiben und wenn nötig, nach Hilfe zu fragen.
  Neben meinem Studium arbeite ich geringfügig bei der ITSV, wo ich Gelerntes in die Realität umsetzen darf.`;


  return (
    <Grommet >
      <Page style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Welcome" title={
          <Heading size="xlarge" className="aboutMeTitle" a11yTitle="Who am I, find out.">Anna Poglitsch.</Heading>
        } alignSelf="center" />
        <Box direction="row" alignSelf='center' gap="xlarge">

          <Image a11yTitle="A woman." className="aboutMeImage"
            src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
          />

          <Paragraph a11yTitle={aboutMeParagraph} margin="none" style={{ color: "white", fontSize: "25px" }}>
            Im Zuge meiner Schullaufbahn habe ich meine Neugier für Technik, Datenverarbeitung und dessen Schutz entdeckt.
            Meine ersten Berührungspunkte habe ich in der Unterstufe in der Übung Informatik gemacht, was dazu geführt hat,
            dass ich mich anschließend für den Realzweig und für meine derzeitige Ausbildung entschieden habe.
            Das Studium Computer Science and Digital Communication vereint alle Themenbereiche, die ich näher kennenlernen will und in weiterer Folge beherrschen.
            Seit her begleitet mich Mathematik, Programmieren und verschiedenste Team-Projekte täglich durch mein Leben. Ich habe gelernt mich an neue Funktionsabläufe anzupassen,
            konsequent an meinem Ziel zu bleiben und wenn nötig, nach Hilfe zu fragen.
            Neben meinem Studium, arbeite ich geringfügig bei der ITSV, wo ich Gelerntes in die Realität umsetzen darf.
          </Paragraph>
        </Box>
        <Box className="aboutMeBox">
          <Text className="hobbyText">In my free time I like to...</Text>
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
        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default AboutMe;