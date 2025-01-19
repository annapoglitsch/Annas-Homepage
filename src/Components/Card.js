import React from "react";
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

function CardJS(){
    return(
        <div>
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
                        <Link href="https://github.com/frontio-ai/heroui" className="custom-link" >
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
                        <Link href="https://github.com/frontio-ai/heroui" className="custom-link" >
                           {card.footer}
                        </Link>
                    </CardFooter>
                </Card>
            )
          })}
                
            </div>
            </div>
    )
}
export default CardJS;