import React, { useEffect } from "react";
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
import English from "../static/English.json"
import German from "../static/German.json"

function MyWork() {

  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState([]);

  useEffect(() => {
    console.log("My Work: ", searchValue, filterValue)
  }, [searchValue, filterValue])

  const [selectedLanguage, setSelectedLanguage] = React.useState("");


  const languageChoise = selectedLanguage === "EN" ? English.english : German.german;



  return (
    <Grommet >
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp selectedLanguage={setSelectedLanguage}></HeaderTemp>
        {languageChoise.map((content) => (
          <React.Fragment>
            <PageHeader a11yTitle={content.TitelWork} title={
              <Heading size="xlarge" className="myWorkTitle">{content.TitelWork}</Heading>
            } alignSelf="center" />
            <Box style={{ direction: "column", }} gap={"medium"} alignSelf="center">
              <h1 className="searchWork" a11yTitle={content.UntertitelWork}>{content.UntertitelWork}</h1>

              <FilterTemp onSearch={setSearchValue} onFilterChange={setFilterValue}></FilterTemp>
            </Box>
            {/*Cards */}
            <CardTemplate searchValue={searchValue} filterValue={filterValue}></CardTemplate>


          </React.Fragment>
        ))}

        {/*Footer */}
        <FooterTemp language={selectedLanguage}></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default MyWork