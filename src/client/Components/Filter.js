import React from "react";
import { Toolbar, TextInput, DropButton, Button, Box } from "grommet";
import { Search} from "grommet-icons";
import {Filter} from "grommet-icons"
import "../style/main.css"
import "../style/mywork.css"

function FilterTemp() {
    return (
        <Box>
        <Toolbar>
            <TextInput icon={<Search color="white" />} className="inputFilter"/>
            <DropButton kind="toolbar" icon={<Filter color="white" />}/>
            <Button label="Search" primary className="mainButton" size="large" hoverIndicator="false" focusIndicator="false"/>
        </Toolbar>
        </Box>
    )
}
export default FilterTemp;