import React from "react";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import cards from "../static/cards.json"
import { Divider } from "@heroui/divider";

function CardJS(){
    return(
        <div>
        <div style={{ height: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "40px", marginTop: "20px" }}>
            {cards.cards.map(card => {
            return (
                <Card style={{ background: "white", width: "350px", height: "auto", fontSize:"20px"}}>
                    <CardHeader color="#E2E1CF" style={{fontWeight: "bold", paddingLeft: "10px"}}>
                        <div className="flex flex-col">
                            <p className="text-md">{card.header}</p>
                        </div>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody style={{height: "200px", paddingLeft: "10px"}}>
                        <p>{card.body}</p>
                    </CardBody>
                    <CardFooter style={{background: "#E2E1CF"}}>
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
                <Card style={{ background: "white", width: "350px", height: "auto", fontSize:"20px"}}>
                    <CardHeader color="#E2E1CF" style={{fontWeight: "bold", paddingLeft: "10px"}}>
                        <div className="flex flex-col">
                            <p className="text-md">{card.header}</p>
                        </div>
                    </CardHeader>
                    <Divider></Divider>
                    <CardBody style={{height: "200px", paddingLeft: "10px"}}>
                        <p>{card.body}</p>
                    </CardBody>
                    <CardFooter style={{background: "#E2E1CF"}}>
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