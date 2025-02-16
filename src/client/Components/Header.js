import React from "react";
import {
    Box,
    Header,
    ToggleGroup,
} from "grommet";
import TabComponent from "../Components/Tab";
import "../style/header.css"

function HeaderTemp() {
    return (
        <Header className="mainHeader">
            <Box margin={"30px"}><TabComponent title1={"Home"} title2={"About Me"} title3={"My Work"} title4={"Contact Me"} a11yTitle="Headlines: Home, My Work, About Me, Contact Me" /></Box>

            <Box margin={"30px"}><ToggleGroup a11yTitle="Toggle Between Englisch and German, current: Englisch" options={["EN", "DE"]} className="toggleHeader">
            </ToggleGroup></Box>
        </Header>
    )
}
export default HeaderTemp