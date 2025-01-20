import React from "react";
import { Toolbar, TextInput, DropButton, Button, Box } from "grommet";
import { Search} from "grommet-icons";
import {Filter} from "grommet-icons"
import "../style/main.css"

function FilterTemp() {
    return (
        <Box>
        <Toolbar>
            <TextInput icon={<Search />} disabled="true"/>
            <DropButton kind="toolbar" icon={<Filter />} disabled="true" />
            <Button label="Search" primary className="mainButton" size="large" disabled="true"/>
        </Toolbar>
        </Box>
    )
}
export default FilterTemp;