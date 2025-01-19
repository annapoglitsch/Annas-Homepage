import React from "react";
import {
  Grommet,
  Page,
  PageHeader,
  Heading,
} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import CardTemplate from "../Components/CardTemp";

function MyWork() {
  return ( 
    <Grommet >
      <Page>
        {/*Header */}
        <HeaderTemp></HeaderTemp>
        <PageHeader a11yTitle="Let's Talk About Work." title={
          <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Let's Talk About Work.</Heading>
        } alignSelf="center" />

        {/*Cards */}
        <CardTemplate></CardTemplate>
        {/*Footer */}
        <FooterTemp></FooterTemp>
      </Page>
    </Grommet>
  );
}
export default MyWork