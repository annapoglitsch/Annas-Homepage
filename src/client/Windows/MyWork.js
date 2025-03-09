import React, { useEffect } from "react";

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import CardJS from "../Components/Card"
import FilterWork from '../Components/FilterWork';
import "../style/mywork.css"
import "../style/home.css"
import "../style/main.css"
import { useFetchLanguage } from "../static/UseEffect";

function MyWork({ language, setLanguage }) {

    const [searchValue, setSearchValue] = React.useState("");
    const [filterValue, setFilterValue] = React.useState([]);

    useEffect(() => {
        console.log("My Work: ", searchValue, filterValue)
    }, [searchValue, filterValue])
    const content = useFetchLanguage(language);


    if (!content) {
        return <div>Loading...</div>;
    }
    const languageContent = content.language[0];

    return (
        <div className='mainDis'>
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage}></Header>
            <div style={{ direction: "column", textAlign: "center", marginTop: "100px" }}>
                <h1 aria-label={languageContent.TitelWork} className='pageTitle'>{languageContent.TitelWork}</h1>
            </div>
            <h2 aria-label={languageContent.UntertitelWork} className='wantToknow' >{languageContent.UntertitelWork}</h2>

            <FilterWork onSearch={setSearchValue} onFilterChange={setFilterValue} languageChoice={languageContent}/>


            <CardJS searchValue={searchValue} filterValue={filterValue}></CardJS>
            <Footer languageChoice={languageContent}></Footer>

        </div>

    )
}
export default MyWork;