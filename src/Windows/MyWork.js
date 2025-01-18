import React from 'react';

import {
    Navbar,
    NavbarContent,
    NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import cards from "../static/cards.json"
import cardsTwo from "../static/cards.json"

function MyWork() {
    return (
        <div style={{ backgroundColor: "#F7F6E3", minHeight: "100vh" }}>
            <div style={{ backgroundColor: "#E2E1CF", height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
                <Navbar style={{ height: "80px" }}>
                    <NavbarContent style={{ display: 'flex', justifyContent: "start", listStyle: "none" }}>
                        <NavbarItem style={{ size: "30px", fontFamily: "serif" }}>
                            <Link href="/" style={{ fontWeight: "600", fontSize: "25px", textDecoration: "none" }} color="danger">Home</Link>
                        </NavbarItem>
                        <NavbarItem style={{ size: "30px", fontFamily: "serif" }}>
                            <Link href="/aboutme" className="custom-link" style={{ textDecoration: "none", color: "#383C34", fontSize: "25px", fontWeight: "600" }}>About Me</Link>
                        </NavbarItem>
                        < NavbarItem style={{ size: "30px", fontFamily: "serif" }}>
                            <Link href="/mywork" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600" }} color='#383C34'>My Work</Link>
                        </NavbarItem>
                        <NavbarItem style={{ size: "30px", fontFamily: "serif" }}>
                            <Link href="/aboutme" className="custom-link" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600" }}>Contact Me</Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                <h2 style={{ fontSize: "25px", fontWeight: "600", fontFamily: "serif" }}>Anna Poglitsch</h2>
            </div>
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h1 style={{ fontSize: "100px", fontWeight: "400", fontFamily: "serif", color: "#383C34", }}>Let's Talk about Work.</h1>
            </div>
            <div style={{ height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px", marginTop: "20px" }}>
            {cards.cards.map(card => {
            return (
                <Card style={{ background: "#E2E1CF", width: "350px", height: "400px"}}>
                    <CardHeader color="#E2E1CF">
                        <div className="flex flex-col">
                            <p className="text-md">{card.header}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>{card.body}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter backgroundColor="#E2E1CF">
                        <Link href="https://github.com/frontio-ai/heroui" style={{ textDecoration: "none", fontSize: "15px", fontWeight: "600" }}>
                           {card.footer}
                        </Link>
                    </CardFooter>
                </Card>
            )
          })}
                
            </div>
            <div style={{ height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px", marginTop: "20px" }}>
            {cards.cardsTwo.map(card => {
            return (
                <Card style={{ background: "#E2E1CF", width: "350px", height: "400px"}}>
                    <CardHeader color="#E2E1CF">
                        <div className="flex flex-col">
                            <p className="text-md">{card.header}</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>{card.body}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter backgroundColor="#E2E1CF">
                        <Link href="https://github.com/frontio-ai/heroui" style={{ textDecoration: "none", fontSize: "15px", fontWeight: "600" }}>
                           {card.footer}
                        </Link>
                    </CardFooter>
                </Card>
            )
          })}
                
            </div>
            <div style={{ backgroundColor: "#E2E1CF", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px"}}>
                <h2 style={{ fontSize: "25px", fontWeight: "600", fontFamily: "serif" }}>Copyright © 2025</h2>
                <Link href="/contact" style={{ textDecoration: "none", fontSize: "25px", fontWeight: "600" }}>Contact</Link>
            </div>

        </div>

    )
}
export default MyWork;