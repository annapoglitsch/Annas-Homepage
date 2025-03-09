import { Routes, Route} from "react-router-dom"
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import Home from "./Windows/Home"
import Contact from "./Windows/Contact"
import Entries from "./Windows/MyWork"
import Thoughts from "./Windows/AboutMe"

const App = () => {
  
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact  />} />
        <Route path="/mywork" element={<Entries  />} />
        <Route path="/aboutme" element={<Thoughts  />} />
        <Route path="/home" element={<Home  />} />
      </Routes>
  );
}

export default App