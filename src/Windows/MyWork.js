import React from "react";
import {
  Grommet,
  Page,
  PageHeader,
  Heading,
  Box
} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import CardTemplate from "../Components/CardTemp";
import FilterTemp from "../Components/Filter";

function MyWork() {
  return ( 
    <Grommet >
      <Page style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Let's Talk About Work." title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Let's Talk About Work.</Heading>
        } alignSelf="center" />
        <Box style={{direction: "column", }}gap={"medium"} alignSelf="center">
        <h1 style={{color: "#383C34"}}>I want to know something about...</h1>
        <FilterTemp></FilterTemp>
        </Box>
        {/*Cards */}
        <CardTemplate></CardTemplate>
        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default MyWork