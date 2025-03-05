import React from "react";
import { useEffect } from "react";
import {
    Box,
    Header,
    ToggleGroup,
} from "grommet";
import TabComponent from "../Components/Tab";
import "../style/header.css"

import English from "../static/English.json"
import German from "../static/German.json"

function HeaderTemp({ selectedLanguage }) {

    const [language, setLanguage] = React.useState("")

    const options = ["EN", "DE"];

    const handleLanguage = (event) => {
        setLanguage(event.value)
        if (typeof selectedLanguage === "function") {
            selectedLanguage(event.value);
        }
    }

    const languageChoise = language === "EN" ? English.english : German.german;



    useEffect(() => {
        console.log("Language: ", language)
    }, [language])

    return (
        <Header className="mainHeader">
            {languageChoise.map((content) => (
                <React.Fragment>
                    <Box margin={"30px"}><TabComponent title1={content.HeaderTitel1} title2={content.HeaderTitel2} title3={content.HeaderTitel3} title4={content.HeaderTitel4} a11yTitle="Headlines: Home, My Work, About Me, Contact Me" /></Box>

                    <Box margin={"30px"}><ToggleGroup a11yTitle="Toggle Between Englisch and German, current: Englisch" options={options} value={language} onToggle={handleLanguage} className="toggleHeader">
                    </ToggleGroup>
                    </Box>
                </React.Fragment>
            ))}

        </Header>
    )
}
export default HeaderTemp