import React from "react";
import { Box, Tab, Tabs } from 'grommet';
import { useNavigate } from "react-router-dom";
import "../style/header.css";

export default function TabComponent  ({ title1, title2, title3, title4, language })  {
 
    const navigate = useNavigate();

    const handleTabChange = (index) => {
      switch (index) {
        case 0:
          navigate("/home");
          break;
        case 1:
          navigate("/aboutme");
          break;
        case 2:
          navigate("/mywork");
          break;
        case 3:
          navigate("/contact");
          break;
        default:
          break;
      }
    };
    
      return (
        <Tabs onActive={handleTabChange} className="TabsHeader" >
        <Tab title={title1} TabComponent={language.HeaderTitel1}   a11yTitle={language.HeaderTitel1}   className="headerTabs" >
        </Tab>  
        <Tab title={title2} TabComponent={language.HeaderTitel2}   a11yTitle={language.HeaderTitel2}   className="headerTabs" >
        </Tab>
        <Tab title={title3} TabComponent={language.HeaderTitel3}  color="black" a11yTitle={language.HeaderTitel3}    className="headerTabs">
        </Tab>
        <Tab title={title4}  TabComponent={language.HeaderTitel4}   a11yTitle={language.HeaderTitel4}    className="headerTabs" >
        </Tab>
      </Tabs>
    );
  };
