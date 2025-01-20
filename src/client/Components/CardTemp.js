import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box
} from "grommet";
import cards from "../static/Card.json"
import cardsTwo from "../static/Card.json"
import "../style/main.css"

export default function CardTemplate  ()  {
    return (
      <Box direction="column" pad={"medium"} gap={"xlarge"} alignSelf="center">
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cards.cards.map(card => {
            return (<Card height="medium" width="medium" background="light-1" >
              <CardHeader pad="medium" style={{ fontWeight: "bold"}}>{card.header}</CardHeader>
              <CardBody pad="medium" style={{fontSize:"20px"}}>{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }}  height={"xxsmall"} background="#E2E1CF" style={{ fontWeight: "bold", fontSize: "20px" }}>
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cardsTwo.cardsTwo.map(card => {
            return (<Card height="medium" width="medium" background="light-1" >
              <CardHeader pad="medium" style={{ fontWeight: "bold", fontSize: "20px" }}>{card.header}</CardHeader>
              <CardBody pad="medium" >{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} style={{ fontWeight: "bold", fontSize: "20px" }} height={"xxsmall"} background="#E2E1CF">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        </Box>
    );
  };