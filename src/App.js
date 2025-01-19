import { Routes, Route } from "react-router-dom"
import Home from "./Windows/Home"
import AboutMe from "./Windows/AboutMe"
import MyWork from "./Windows/MyWork"
import Contact from "./Windows/Contact"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutme" element={<AboutMe />}></Route>
      <Route path="/mywork" element={<MyWork />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>

  );
}

export default App;
