import React from "react";
import { Toolbar, TextInput, DropButton, Button, Box } from "grommet";
import { Search} from "grommet-icons";
import {Filter} from "grommet-icons"

function FilterTemp() {
    return (
        <Box>
        <Toolbar>
            <TextInput icon={<Search />} />
            <DropButton kind="toolbar" icon={<Filter />} />
            <Button label="Search" primary style={{color: "black", backgroundColor: "white", borderColor: "white"}} size="large"/>
        </Toolbar>
        </Box>
    )
}
export default FilterTemp;