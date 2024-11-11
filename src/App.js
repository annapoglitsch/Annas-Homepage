import {Routes, Route} from "react-router-dom"

import  Home  from "./Windows/Home"
import  Contact  from "./Windows/Contact"
import Entries from "./Windows/Entries"
import Thoughts from "./Windows/Thoughts"

function App(){
    return(
        
       < Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/contact" element={<Contact></Contact>}></Route>
       <Route path="/entries" element={<Entries></Entries>}></Route>
       <Route path="/thoughts" element={<Thoughts></Thoughts>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       </Routes>
    )
}

export default App