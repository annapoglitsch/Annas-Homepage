import React, { useEffect, useState} from "react";
import { Link } from "@heroui/link";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";
import "../style/card.css"

function CardJS({ searchValue, filterValue }) {

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
        console.log("CardUseEffectSearch:", searchValue);
        console.log("CardUseEffectFilter: ", filterValue)
    }, [searchValue, filterValue])

    return (
        <div>
            <div
                className="workCardDiv"
            >
                {filteredCards.length > 0 ? (
                    filteredCards.map((card, index) => (
                        <Card key={index} style={{ background: "white", width: "100%", height: "auto", fontSize: "20px" }}>
                            <CardHeader aria-label={card.header}  color="#E2E1CF" style={{ fontWeight: "bold", paddingLeft: "10px" }}>
                                <div className="flex flex-col">
                                    <p className="text-md">{card.header}</p>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody aria-label={card.body}  style={{ height: "200px", paddingLeft: "10px" }}>
                                <p>{card.body}</p>
                            </CardBody>
                            <CardFooter style={{ background: "#E2E1CF" }}>
                                <Link aria-label={card.footer}  href="https://github.com/frontio-ai/heroui" className="custom-link">
                                    {card.footer}
                                </Link>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <p aria-label="No cards found." style={{ textAlign: "center", width: "100%", color: "white", fontSize: "30px" }}>No cards found.</p>
                )}

            </div>
        </div>
    )
}
export default CardJS;