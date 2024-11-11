import React, {useContext, useState} from "react";
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
          navigate("/thoughts");
          break;
        case 2:
          navigate("/entries");
          break;
        case 3:
          navigate("/contact");
          break;
        default:
          break;
      }
    };

    return (
        <Tabs onActive={handleTabChange}>
        <Tab title={title1} TabComponent="Home">
        </Tab>
        <Tab title={title2} TabComponent="Random Thoughts">
        </Tab>
        <Tab title={title3} TabComponent="Entries">
        </Tab>
        <Tab title={title4}  TabComponent="ContactMe">
          <Box pad="medium" direction="row" gap="medium">
           </Box>
        </Tab>
      </Tabs>
    );
  };
