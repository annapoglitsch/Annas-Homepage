import React, { useEffect} from "react";
import Header from "../Components/Header";
import "../style/mywork.css";
import Footer from "../Components/Footer";
import CardWork from "../Components/CardWork";
import Filter from "../Components/Filter"
import { useState } from "react";
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
        <div>
            <Header languageChoice={languageContent} setLanguageChoice={setLanguage}></Header>
            <div className="main-contentDiv">

                <h1 aria-label={languageContent.TitelWork} className="workFont" >{languageContent.TitelWork}.</h1>
                <h1 aria-label={languageContent.UntertitelWork} className="IwantFont">{languageContent.UntertitelWork}</h1>
               <Filter onSearch={setSearchValue} onFilterChange={setFilterValue} languageChoice={languageContent}></Filter>
                <div className="cardContainerWork">
                    <CardWork searchValue={searchValue} filterValue={filterValue}></CardWork>
                </div>
                <Footer languageChoice={languageContent}></Footer>
            </div>

        </div>
    )
}
export default MyWork;  