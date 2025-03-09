import { Routes, Route } from "react-router-dom"
import Home from "./Windows/Home"
import AboutMe from "./Windows/AboutMe"
import MyWork from "./Windows/MyWork"
import Contact from "./Windows/Contact"
import { useState } from "react"



function App() {
  const [language, setLanguage] = useState("EN");
  return (
    <Routes>
      <Route path="/" element={<Home language={language} setLanguage={setLanguage}/>}></Route>
      <Route path="/aboutme" element={<AboutMe language={language} setLanguage={setLanguage}/>}></Route>
      <Route path="/mywork" element={<MyWork language={language} setLanguage={setLanguage}/>}></Route>
      <Route path="/contact" element={<Contact language={language} setLanguage={setLanguage}/>}></Route>
    </Routes>

  );
}

export default App;
