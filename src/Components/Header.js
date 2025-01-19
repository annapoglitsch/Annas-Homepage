import React from "react";
import {
    Box,
    Header,
    Text,
  } from "grommet";
  import TabComponent from "../Components/Tab";

function HeaderTemp() {
    return (
        <Header background="#E2E1CF" gap={"small"} height={"xsmall"} direction="row" >
            <Box margin={"medium"}><TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>

            <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"}>Anna Poglitsch</Text></Box>
        </Header>
    )
}
export default HeaderTemp