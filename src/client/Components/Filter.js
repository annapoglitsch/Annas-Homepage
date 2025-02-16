import React, { useEffect } from "react";
import { Toolbar, TextInput, Button, Box, CheckBoxGroup, DropButton } from "grommet";
import { Search } from "grommet-icons";
import { Filter } from "grommet-icons";
import "../style/main.css"
import "../style/mywork.css"

function FilterTemp({ onSearch, onFilterChange }) {

    const [searchInput, setSearchInput] = React.useState("")
    const [filterValue, setFilterValue] = React.useState([]);

    const handleSearch = async () => {
        console.log("SearchValue", searchInput)
        onSearch(searchInput);
    }

    useEffect(() => {
        console.log("Search: ", searchInput)
        console.log("Filter: ", filterValue)
    }, [searchInput, filterValue])



    return (
        <Box>
            <Toolbar>
                <DropButton a11yTitle="Filter" style={{ marginTop: "-10px" }} icon={<Filter color="white" size="large"></Filter>} dropAlign={{ top: "bottom" }} dropContent={
                    <Box pad="medium" >
                        <CheckBoxGroup a11yTitle="Choose Project or/and Hobby" value={filterValue}
                            onChange={(event) => {
                                console.log('value: ', event.value);
                                console.log('option: ', event.option);
                                setFilterValue(event.value);
                                onFilterChange(event.value);
                            }}
                            options={["Projects", "Hobby"]} />
                    </Box>
                } />
                <TextInput a11yTitle="" icon={<Search color="white" />} className="inputFilter" value={searchInput} onChange={(event) => {
                    setSearchInput(event.target.value)
                    console.log(event.target.value)
                }} />

                <Button a11yTitle="Search" label="Search" primary className="mainButton" size="large" onClick={handleSearch} />
            </Toolbar>
        </Box>
    )
}
export default FilterTemp;