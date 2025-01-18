import {Routes, Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import  Home  from "./Windows/Home"
import MyWork from "./Windows/MyWork"
import AboutMe from "./Windows/AboutMe"

function App(){
    return(
        <BrowserRouter>
        < Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mywork" element={<MyWork/>}></Route>
        <Route path="/aboutme" element={<AboutMe/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App
