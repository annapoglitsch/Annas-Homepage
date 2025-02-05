import React, { useEffect} from "react";
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

function MyWork() {

    const [searchValue, setSearchValue] = React.useState("");
    const [filterValue, setFilterValue] = React.useState([]); 

    useEffect(() => {
      console.log("My Work: ", searchValue, filterValue)
    }, [searchValue, filterValue])

  return ( 
    <Grommet >
      <Page className="mainPage">
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Let's Talk About Work." title={
          <Heading size="xlarge" className="myWorkTitle">Let's Talk About Work.</Heading>
        } alignSelf="center" />
        <Box style={{direction: "column", }}gap={"medium"} alignSelf="center">
        <h1 className="searchWork">I want to know something about...</h1>

        <FilterTemp onSearch={setSearchValue} onFilterChange={setFilterValue}></FilterTemp>
        </Box>
        {/*Cards */}
        <CardTemplate searchValue={searchValue} filterValue={filterValue}></CardTemplate>


        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default MyWork