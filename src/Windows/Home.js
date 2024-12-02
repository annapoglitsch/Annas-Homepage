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
  Carousel,
} from "grommet";
import { Attraction, Car, TreeOption } from 'grommet-icons';
import { deepMerge } from "grommet/utils";
import CardTemplate from "../Components/CardTemp";
import TabComponent from "../Components/Tab";
import { colors } from "grommet/themes/base";

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
   // background="brand"
   col
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="small"  
    {...props}
  />
);

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page background="#FFFDF2">
        <AppBar background="#eee9d0">
          <TabComponent title1={"Home"} title2={"My Work"} title3={"About Me"} title4={"Contact Me"}  a11yTitle="Überschriften: Home, My Work, About Me, Contact Me"/>
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
          <PageHeader title="Anna's Homepage"/>

          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>

          <Box height="small" width="large" overflow="hidden" fill="true" margin={{vertical: 'medium'}} a11yTitle="Recent Project Pictures">
              <Carousel>
                <Box pad="xlarge" background="light-1">
                  <Attraction size="xlarge" />
                </Box>
                <Box pad="xlarge" background="light-2">
                  <TreeOption size="xlarge" />
                </Box>
                <Box pad="xlarge" background="light-3">
                  <Car size="xlarge" />
                </Box>
              </Carousel>
          </Box>

          <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Text>
          
        </PageContent>
        <Footer background="#eee9d0" pad="medium" >
       <Text>Copyright</Text>
       <Anchor label="Contact Me" />
        </Footer>
      </Page>
    </Grommet>
  );
};

export default App;
