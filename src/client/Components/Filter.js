import React, { useEffect } from "react";
import { Toolbar, TextInput, Button, Box, CheckBoxGroup, DropButton } from "grommet";
import { Search } from "grommet-icons";
import { Filter } from "grommet-icons";
import "../style/main.css"
import "../style/mywork.css"
import English from "../static/English.json"
import German from "../static/German.json"

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

    const [selectedLanguage, setSelectedLanguage] = React.useState("");


    const languageChoise = selectedLanguage === "EN" ? English.english : German.german;

    return (
        <Box>
            {languageChoise.map((content) => (
                <React.Fragment>
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
                                    options={[content.FilterProjekt,content.FilterHobby]} />
                            </Box>
                        } />
                        <TextInput a11yTitle="" icon={<Search color="white" />} className="inputFilter" value={searchInput} onChange={(event) => {
                            setSearchInput(event.target.value)
                            console.log(event.target.value)
                        }} />

                        <Button a11yTitle={content.FilterSuche} label={content.FilterSuche} primary className="mainButton" size="large" onClick={handleSearch} />
                    </Toolbar>
                </React.Fragment>
            ))
            }
        </Box >
    )
}
export default FilterTemp;