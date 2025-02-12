import React, { useEffect } from "react";
import Select from "react-dropdown-select";
import "../style/mywork.css";
import Button from 'react-bootstrap/Button';
import { Dropdown, DropdownButton, Form } from 'react-bootstrap';
import 'react-dropdown/style.css';
import { BsFilter } from "react-icons/bs";

function Filter({onSearch, onFilterChange}) {

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

    const submitSearch =  (event) => {
        onSearch(searchInput);
    }

    useEffect(() => {
        console.log("Search: ", searchInput)
        console.log("Filter: ", filterValue)
    }, [searchInput, filterValue])


    return (
        <Form className="formWork d-flex align-items-center justify-content-center">
             <DropdownButton style={{marginRight: "5%"}} title={<BsFilter size={40}/>}>
                <Dropdown.Item as="div">
                    <Form.Check
                        type="checkbox"
                        label="Projects"
                        name="Projects"
                        onChange={handleCheckBox}
                    />
                </Dropdown.Item>
                <Dropdown.Item as="div">
                    <Form.Check
                        type="checkbox"
                        label="Hobby"
                        name="Hobby"
                        onChange={handleCheckBox}
                    />
                </Dropdown.Item>
            </DropdownButton>
            <div className="col-auto">
                <Form.Group className="formGroupWork" controlId="exampleForm.ControlInput1" >
                    <Form.Control type="text" placeholder="Search" className="formControlWork w-100" value={searchInput}  onChange={handleSearch} />
                </Form.Group>
            </div>

           

            <div className="col-auto">
                <Button className="ButtonWork" variant="primary" type="button" onClick={submitSearch}>Search</Button>
            </div>
        </Form>
    )
}

export default Filter;