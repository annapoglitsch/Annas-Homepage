import React from "react";
import {} from "grommet";
import HeaderTemp from "../Components/Header";
import FooterTemp from "../Components/Footer";
import {
    Heading,
    Grommet,
    Page,
    PageHeader,
  } from "grommet";
   export function ContactWindowLocation(){
    
        return(
            <Grommet >
            <Page>
              {/*Header */}
              <HeaderTemp></HeaderTemp>
              <PageHeader a11yTitle="Welcome" title={
                <Heading size="xlarge" weight={"bold"} color={"#383C34"}>Anna Poglitsch.</Heading>
              } alignSelf="center" />
              {/*Footer */}
              <FooterTemp></FooterTemp>
            </Page>
          </Grommet>
            );
    }

    
export default ContactWindowLocation
