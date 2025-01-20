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
            <Box margin={"medium"}><TabComponent title1={"Home"} title2={"About Me"} title3={"My Work"} title4={"Contact Me"} a11yTitle="Überschriften: Home, My Work, About Me, Contact Me" /></Box>
            
            <Box><Text a11yTitle="Anna Poglitsch" alignSelf="end" margin={"small"} size="large" weight={"bold"} style={{fontSize:"30px"}}>Anna Poglitsch</Text></Box>
        </Header>
    )
}
export default HeaderTemp