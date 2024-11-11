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
  Footer,
  Text,
  Anchor,
} from "grommet";
import { deepMerge } from "grommet/utils";
import CardTemplate from "../Components/CardTemp";
import TabComponent from "../Components/Tab";


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

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <TabComponent title1={"Home"} title2={"RandomThoughts"} title3={"Entries"} title4={"Contact Me"}/>
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
        <PageContent>
          <PageHeader title="Debugging Life And Code" />
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Anna"} />
            <CardTemplate title={"Pupsi"} />
            <CardTemplate title={"4Jäger"} />
          </Grid>
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}>
            <CardTemplate title={"Srbija"} />
            <CardTemplate title={"Rubin"} />
            <CardTemplate title={"Essen"} />
          </Grid>
        </PageContent>
        <Footer background="brand" pad="medium">
       <Text>Copyright</Text>
       <Anchor label="Contact Me" />
        </Footer>
      </Page>
    </Grommet>
  );
};

export default App;