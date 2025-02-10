import React, { useEffect} from "react";
import Header from "../Components/Header";
import "../style/mywork.css";
import Footer from "../Components/Footer";
import CardWork from "../Components/CardWork";
import Filter from "../Components/Filter"
function MyWork() {

    const [searchValue, setSearchValue] = React.useState("");
    const [filterValue, setFilterValue] = React.useState([]);

    useEffect(() => {
        console.log("My Work: ", searchValue, filterValue)
    }, [searchValue, filterValue])

    return (
        <div>
            <Header></Header>
            <div className="main-contentDiv">

                <h1 className="workFont">Let's Talk About Work.</h1>
                <h1 className="IwantFont"> I want to know something about...</h1>
               <Filter onSearch={setSearchValue} onFilterChange={setFilterValue}></Filter>
                <div className="cardContainerWork">
                    <CardWork searchValue={searchValue} filterValue={filterValue}></CardWork>
                </div>
                <Footer></Footer>
            </div>

        </div>
    )
}
export default MyWork;  