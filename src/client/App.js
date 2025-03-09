import { Routes, Route} from "react-router-dom"
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import Home from "./Windows/Home"
import Contact from "./Windows/Contact"
import Entries from "./Windows/MyWork"
import Thoughts from "./Windows/AboutMe"

const App = () => {

  const [language, setLanguage] = useState("EN");
  
  return (
      <Routes>
        <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>} />
        <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage} />} />
        <Route path="/mywork" element={<Entries language={language} setLanguage={setLanguage} />} />
        <Route path="/aboutme" element={<Thoughts language={language} setLanguage={setLanguage} />} />
        <Route path="/home" element={<Home language={language} setLanguage={setLanguage} />} />
      </Routes>
  );
}

export default App