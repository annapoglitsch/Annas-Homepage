import React, { useEffect } from "react";
import { useState } from "react";
import {
  Grommet,
  Page,
  PageHeader,
  Heading,
  Box,
} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import CardTemplate from "../Components/CardTemp";
import FilterTemp from "../Components/Filter";
import "../style/mywork.css"
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
    <Grommet >
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp languageChoice={languageContent} setLanguageChoice={setLanguage}></HeaderTemp>


        <PageHeader a11yTitle={languageContent.TitelWork} title={
          <Heading size="xlarge" className="myWorkTitle">{languageContent.TitelWork}</Heading>
        } alignSelf="center" />
        <Box style={{ direction: "column", }} gap={"medium"} alignSelf="center">
          <h1 className="searchWork" a11yTitle={languageContent.UntertitelWork}>{languageContent.UntertitelWork}</h1>

          <FilterTemp onSearch={setSearchValue} onFilterChange={setFilterValue} languageChoice={languageContent}></FilterTemp>
        </Box>
        {/*Cards */}
        <CardTemplate searchValue={searchValue} filterValue={filterValue}></CardTemplate>




        {/*Footer */}
        <FooterTemp languageChoice={languageContent}></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default MyWork