import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Grid
} from "grommet";
import "../style/main.css"
import "../style/card.css"


export default function CardTemplate({ searchValue, filterValue }) {

  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    console.log("CardFront", JSON.stringify({ searchInput: searchValue, filterValue: filterValue }))


    fetch("http://localhost:5000/mywork", {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
      },

      body: JSON.stringify({ searchInput: searchValue, filterValue: filterValue })
    }
    ).then((response) => response.json())
      .then(data => setFilteredCards(data))
      .then(error => console.error("Error while fetching data:", error))

  },
    [searchValue, filterValue]
  );

  useEffect(() => {
          console.log("CArdTempHIIer", searchValue)
      }, [searchValue])

  return (
    <Box direction="column" pad={"medium"} gap={"xlarge"} alignSelf="center">
      <Grid columns={{count: 4, size: "auto"}} pad={"medium"} gap={"xlarge"}>
      
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
          <Box>
            <Card key={card.id} height="medium" width="medium" background="light-1" className="cardStyle" >
              <CardHeader pad="medium" className="fontCardStyle">
                {card.header}
              </CardHeader>
              <CardBody pad="medium" className="bodyCardStyle">
                {card.body}
              </CardBody>
              <CardFooter pad={{ horizontal: "small" }} height="xxsmall" background="#D6C9B4" className="fontCardStyle">
                {card.footer}
              </CardFooter>
            </Card>
            </Box>
          ))
        ) : (
          <p>No results found.</p>
        )}

      
      </Grid>
    </Box>
  );
};