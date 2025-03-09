import React from "react";
import { useEffect } from "react";
import {
    Box,
    Header,
    ToggleGroup,
} from "grommet";
import TabComponent from "../Components/Tab";
import "../style/header.css"


function HeaderTemp({languageChoice}) {

    const [language, setLanguage] = React.useState("EN");
    const options = ["EN", "DE"];
  
    const handleLanguage = (event) => {
      setLanguage(event.value);
    };
  
    async function sendSelectedLanguage() {
      const data = {
        selectedLanguage: language,
      };
      console.log("Data: ", language);
      const url = "http://localhost:5000/sendLanguage";
      try {
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    }
  
    useEffect(() => {
      sendSelectedLanguage();
    }, [language]); 


    return (
      <Header className="mainHeader">
        <Box margin={"30px"}>
          <TabComponent
            title1={languageChoice.HeaderTitel1}
            title2={languageChoice.HeaderTitel2}
            title3={languageChoice.HeaderTitel3}
            title4={languageChoice.HeaderTitel4}
            a11yTitle="Headlines: Home, My Work, About Me, Contact Me"
          />
        </Box>
  
        <Box margin={"30px"}>
          <ToggleGroup
            a11yTitle="Toggle Between English and German, current language"
            options={options}
            value={language}
            onToggle={handleLanguage}
            className="toggleHeader"
          />
        </Box>
      </Header>
    );
  }
  
  export default HeaderTemp;