import React, {useContext, useState} from "react";
import { Anchor, Box, Tab, Tabs } from 'grommet';
import { useNavigate } from "react-router-dom";

export default function TabComponent  ({ title1, title2, title3, title4 })  {

    const navigate = useNavigate();

    const colorTheme = {
      global: {
        colors:{
          'background': '#F7F6E3',
          'text': '#546745'
        },
      },
      Anchor:{
        'text': '#546745'
      }
    }

    const handleTabChange = (index) => {
      switch (index) {
        case 0:
          navigate("/home");
          break;
        case 1:
          navigate("/mywork");
          break;
        case 2:
          navigate("/aboutme");
          break;
        case 3:
          navigate("/contact");
          break;
        default:
          break;
      }
    };
      return (
        <Tabs onActive={handleTabChange} style={{textDecoration: 'none'}}>
        <Tab title={title1} TabComponent="Home" color="black" a11yTitle="Home">
        </Tab>  
        <Tab title={title2} TabComponent="MyWork" color="black" a11yTitle="My Work">
        </Tab>
        <Tab title={title3} TabComponent="AboutMe" a11yTitle="About Me">
        </Tab>
        <Tab title={title4}  TabComponent="ContactMe" a11yTitle="Contact Me" style={{textDecoration: 'none'}}>
          <Box pad="medium" direction="row" gap="medium">
           </Box>
        </Tab>
      </Tabs>
    );
  };
