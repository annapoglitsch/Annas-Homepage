import React from "react";
import { Box, Tab, Tabs } from 'grommet';
import { useNavigate } from "react-router-dom";

export default function TabComponent  ({ title1, title2, title3, title4 })  {

    const navigate = useNavigate();

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
        <Tab title={title1} TabComponent="Home" color="black" a11yTitle="Home" style={{fontSize:"30px"}}>
        </Tab>  
        <Tab title={title3} TabComponent="AboutMe" a11yTitle="About Me" style={{fontSize:"30px"}}>
        </Tab>
        <Tab title={title2} TabComponent="MyWork" color="black" a11yTitle="My Work" style={{fontSize:"30px"}}>
        </Tab>
        <Tab title={title4}  TabComponent="ContactMe" a11yTitle="Contact Me" style={{textDecoration: 'none', fontSize:"30px"}}>
          <Box pad="medium" direction="row" gap="medium">
           </Box>
        </Tab>
      </Tabs>
    );
  };
