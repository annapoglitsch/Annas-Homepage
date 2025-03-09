import {Routes, Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import  Home  from "./Windows/Home"
import MyWork from "./Windows/MyWork"
import AboutMe from "./Windows/AboutMe"
import ContactMe from "./Windows/Contact"
import { useState } from "react";
import React from 'react';

function App(){
    const [language, setLanguage] = useState("EN");

    return(
        <BrowserRouter>
        < Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>}></Route>
        <Route path="/mywork" element={<MyWork language={language} setLanguage={setLanguage}/>}></Route>
        <Route path="/aboutme" element={<AboutMe language={language} setLanguage={setLanguage}/>}></Route>
        <Route path="/contact" element={<ContactMe language={language} setLanguage={setLanguage}/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App
