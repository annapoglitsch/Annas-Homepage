import React from 'react';

import Header from "../Components/Header"
import Footer from "../Components/Footer"
import CardJS from "../Components/Card"
import FilterWork from '../Components/FilterWork';
import { Button} from '@heroui/react';
import "../style/mywork.css"
import "../style/home.css"
import "../style/main.css"

function MyWork() {
    return (
        <div className='mainDis'>
            <Header></Header>
            <div style={{ direction: "column", textAlign: "center", marginTop: "100px" }}>
                <h1 className='pageTitle'>Let's Talk About Work.</h1>
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