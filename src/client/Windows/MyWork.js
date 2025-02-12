import React, { useEffect} from "react";

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import CardJS from "../Components/Card"
import FilterWork from '../Components/FilterWork';
import "../style/mywork.css"
import "../style/home.css"
import "../style/main.css"

function MyWork() {

    const [searchValue, setSearchValue] = React.useState("");
    const [filterValue, setFilterValue] = React.useState([]);

    useEffect(() => {
        console.log("My Work: ", searchValue, filterValue)
    }, [searchValue, filterValue])

    return (
        <div className='mainDis'>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginTop: "100px" }}>
                <h1 className='pageTitle'>Let's Talk About Work.</h1>
            </div>
            <h2 className='wantToknow' >I want to know something about...</h2>

            <FilterWork onSearch={setSearchValue} onFilterChange={setFilterValue} />


            <CardJS searchValue={searchValue} filterValue={filterValue}></CardJS>
            <Footer></Footer>

        </div>

    )
}
export default MyWork;