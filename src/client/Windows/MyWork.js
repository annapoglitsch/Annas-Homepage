import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import CardJS from "../Components/Card"
import FilterWork from '../Components/FilterWork';
import { Button} from '@heroui/react';
import "../style/mywork.css"

function MyWork() {
    return (
        <div style={{ backgroundColor: "#F7F6E3", minHeight: "100vh" }}>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginTop: "100px" }}>
                <h1 style={{ fontSize: "100px", fontFamily: "serif", color: "#383C34", fontWeight: "bold", marginBottom: "120px" }}>Let's Talk About Work.</h1>
            </div>
                <h2 className='wantToknow' >I want to know something about...</h2>

            <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
                    <FilterWork />
                    <Button className='importantB' variant='bordered' size='md' radius='full' disabled="true">Search</Button>
            </div>

            <CardJS></CardJS>
            <Footer></Footer>

        </div>

    )
}
export default MyWork;