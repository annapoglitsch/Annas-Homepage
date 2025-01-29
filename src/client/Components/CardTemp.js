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
import "../style/card.css"

export default function CardTemplate  ()  {
    return (
      <Box direction="column" pad={"medium"} gap={"xlarge"} alignSelf="center">
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cards.cards.map(card => {
            return (<Card height="medium" width="medium" background="light-1" className="cardStyle">
              <CardHeader pad="medium" className="fontCardStyle">{card.header} </CardHeader>
              <CardBody pad="medium" className="bodyCardStyle">{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }}  height={"xxsmall"} background="#D6C9B4"  className="fontCardStyle">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        <Box direction="row" pad={"medium"} gap={"xlarge"} alignSelf="center">
          {cardsTwo.cardsTwo.map(card => {
            return (<Card height="medium" width="medium" background="light-1" className="cardStyle">
              <CardHeader pad="medium" className="fontCardStyle">{card.header}</CardHeader>
              <CardBody pad="medium" className="bodyCardStyle">{card.body}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} className="fontCardStyle" height={"xxsmall"} background="#D6C9B4">
                {card.footer}
              </CardFooter>
            </Card>)
          })}
        </Box>
        </Box>
    );
  };