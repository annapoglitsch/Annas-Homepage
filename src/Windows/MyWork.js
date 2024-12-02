import React, { useState } from "react";
import { Moon, Sun } from "grommet-icons";
import {
  Box,
  Button,
  Grid,
  grommet,
  Grommet,
  Header,
  Page,
  PageContent,
  PageHeader,
  Text,
} from "grommet";
import { deepMerge } from "grommet/utils";
import TabComponent from "../Components/Tab";
import CardTemplate from "../Components/CardTemp";

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "14px",
      height: "20px",
    },
  },
});

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="small"
    {...props}
  />
);


function MyWork(){
  const [dark, setDark] = useState(false);
  return(
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
  <Page>
  <AppBar>
          <TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"} colors="black" a11yTitle="Überschriften: Home, My Work, About Me, Contact Me"/>
          <Button
            a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
              content: (
                <Box
                  pad="small"
                  round="small"
                  background={dark ? "dark-1" : "light-3"}
                >
                  {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Box>
              ),
              plain: true,
            }}
          />
        </AppBar>
        <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"About Me"} a11yTitle/>
            <CardTemplate title={"Pupsi"} />
            <CardTemplate title={"4Jäger"} />
          </Grid>
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Srbija"} />
            <CardTemplate title={"Rubin"} />
            <CardTemplate title={"Essen"} />
          </Grid>
  </Page>
  </Grommet>
    );
}
export default MyWork