import React from 'react';
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import "../style/home.css"
import "../style/main.css"
import "../style/aboutme.css"
import aboutMeCards from "../static/aboutMeCards.json"
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";



function AboutMe() {
    return (
        <div className='mainDis'>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginBottom: "130px" }}>
                <h1 className='pageTitle'>Anna Poglitsch.</h1>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px"
                }}>
                    <img
                        className='aboutMeImage'
                        alt={`HeroUI Image`}
                        src="https://heroui.com/images/hero-card-complete.jpeg"

                    />
                    <p className='aboutMeParagraph' >
                        Im Zuge meiner Schullaufbahn habe ich meine Neugier für Technik, Datenverarbeitung und dessen Schutz entdeckt.
                        Meine ersten Berührungspunkte habe ich in der Unterstufe in der Übung Informatik gemacht, was dazu geführt hat,
                        dass ich mich anschließend für den Realzweig und für meine derzeitige Ausbildung entschieden habe. Das Studium Computer
                        Science and Digital Communication vereint alle Themenbereiche, die ich näher kennenlernen will und in weiterer Folge beherrschen.
                        Seit her begleitet mich Mathematik, Programmieren und verschiedenste Team-Projekte täglich durch mein Leben. Ich habe gelernt mich
                        an neue Funktionsabläufe anzupassen, konsequent an meinem Ziel zu bleiben und wenn nötig, nach Hilfe zu fragen. Neben meinem Studium,
                        arbeite ich geringfügig bei der ITSV, wo ich Gelerntes in die Realität umsetzen darf.</p>
                </div>
                <div className='hobbyDiv'>
                    <h2 className='aboutMeFreeTime'>In my free time I like to...</h2>
                    <div className='cardInfo' style={{marginTop: "5%"}}>
                        {aboutMeCards.aboutMeCards.map(card => {
                            return (
                                <Card style={{ background: "white", width: "350px", height: "auto", fontSize: "20px" }}>
                                    <CardHeader color="#E2E1CF" style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                                        <div className="flex flex-col">
                                            <p className="text-md">{card.header}</p>
                                        </div>
                                    </CardHeader>
                                    <Divider></Divider>
                                    <CardBody style={{ height: "200px", paddingLeft: "10px" }}>
                                        <p>{card.body}</p>
                                    </CardBody>
                                    <CardFooter style={{ background: "#E2E1CF" }}>
                                        <Link href="https://github.com/frontio-ai/heroui" className="custom-link" >
                                            {card.footer}
                                        </Link>
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutMe;