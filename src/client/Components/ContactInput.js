import React from "react";
import { Input } from "@heroui/input";
import "../style/contact.css"
import { Button } from "@heroui/button";

function ContactInput({languageChoice}) {

    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = async () => {
        const data = {
            email: email,
            message: message,
        };

        console.log(data);

        fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(() => {
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleReset = () => {
        setEmail("");
        setMessage("");
    };

    return (
        <div style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Input aria-label="Please input your email adress" placeholder="Email" type="" className="contactInput" description={null} value={email} style={{ fontSize: "30px", borderColor: "#D6C9B4", borderWidth: "3px", fontFamily: "Roboto" }} onChange={event => setEmail(event.target.value)}/>
            <Input aria-label="Please input your message." placeholder="Message" type="" description={null} value={message} style={{ fontSize: "30px", borderColor: "#D6C9B4", borderWidth: "3px", fontFamily: "Roboto" }} onChange={event => setMessage(event.target.value)} ></Input>
            <div style={{ flexDirection: "column", marginTop: "5%", width: "auto", display:"flex", flexDirection: "row" }}>
                <Button aria-label={languageChoice.SendMessageButton1} className="mainButton"  onClick={handleSubmit} style={{marginRight: "10%"}}>{languageChoice.SendMessageButton1}</Button>
                <Button aria-label={languageChoice.SendMessageButton2} className="mainButton"  onClick={handleReset} >{languageChoice.SendMessageButton2}</Button>

            </div>
        </div>


    )
}
export default ContactInput;