import React from "react";
import Header from "../Components/Header";
import "../style/mywork.css";
import Footer from "../Components/Footer";
import CardWork from "../Components/CardWork";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MyWork() {
    return (
        <div>
             <Header></Header>
            <div className="main-contentDiv">
           
                <h1 className="workFont">Let's Talk About Work.</h1>
                <h1 className="IwantFont"> I want to know something about...</h1>
                <Form className="formWork d-flex align-items-center justify-content-center" disabled="true">
                    <div className="col-auto"> 
                        <Form.Group className="formGroupWork" controlId="exampleForm.ControlInput1" >
                            <Form.Control type="text" placeholder="Search" className="formControlWork w-100" disabled="true" />
                        </Form.Group>
                    </div>
                    <div className="col-auto">
                        <Button className="ButtonWork" variant="primary" type="submit" disabled="true">Search</Button>
                    </div>
                </Form>

                <CardWork></CardWork>
                <Footer></Footer>
            </div>
            
        </div>
    )
}
export default MyWork;  