import React, { useEffect } from "react";
import { Input } from "@heroui/input";
import { Button } from '@heroui/react';
import "../style/main.css"
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@heroui/dropdown";
import { CheckboxGroup, Checkbox } from "@heroui/checkbox";
import "../style/mywork.css"

export const filterIcon = ({ width = 48, height = 48 }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={width} height={height} strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
        </svg>
    );
}


function FilterWork({onSearch, onFilterChange, languageChoice}) {


    const [searchInput, setSearchInput] = React.useState("")
    let [filterValue, setFilterValue] = React.useState([]);

    const handleCheckBox = event => {

        if (event.target.checked) {
            console.log('value: ', event.target.name);
            setFilterValue([...filterValue, event.target.name]);
            onFilterChange([...filterValue, event.target.name]);

        } else {
            setFilterValue(filterValue.filter(item => item !== event.target.name));
            onFilterChange(filterValue.filter(item => item !== event.target.name));

        }
    };


    const handleSearch = event => {
        setSearchInput(event.target.value)
    }

    const submitSearch = (event) => {
        onSearch(searchInput);
    }

    useEffect(() => {
        console.log("Search: ", searchInput)
        console.log("Filter: ", filterValue)
    }, [searchInput, filterValue])

    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px", alignItems: "center" }}>
            <Dropdown>
                <DropdownTrigger>
                    <Button aria-label="Filter Button" className="mainButton" style={{}}>
                        Filter
                    </Button>
                </DropdownTrigger>
                <DropdownMenu  className="dropdown-menu">
                    <DropdownItem className="dropdown-item">
                        <Checkbox aria-label={languageChoice.FilterProjekt} type="checkbox" name="Projects" style={{ color: "black" }} onChange={handleCheckBox}>{languageChoice.FilterProjekt}</Checkbox>
                    </DropdownItem>
                    <DropdownItem className="dropdown-item">
                        <Checkbox aria-label={languageChoice.FilterHobby} type="checkbox" name="Hobby" onChange={handleCheckBox}>{languageChoice.FilterHobby}</Checkbox>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Input aria-label="Please enter anything you want to search for." type="text" placeholder={languageChoice.FilterSuche} className="workInput" style={{ fontSize: "30px", borderColor: "#D6C9B4", borderWidth: "3px", fontFamily: "Roboto" }} value={searchInput} onChange={handleSearch} ></Input>
            <Button aria-label={languageChoice.FilterSuche} className='mainButton' onClick={submitSearch}>{languageChoice.FilterSuche}</Button>
        </div>

    );
}
export default FilterWork;