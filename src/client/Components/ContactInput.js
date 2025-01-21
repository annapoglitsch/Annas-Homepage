import React from "react";
import { Input } from "@heroui/input";
import "../style/contact.css"
import { Button } from "@heroui/button";

function ContactInput() {

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
            <Input placeholder="Email" type="" className="contactInput" description={null} value={email} onChange={event => setEmail(event.target.value)} disabled="true"/>
            <Input placeholder="Message" type="" description={null} value={message} onChange={event => setMessage(event.target.value)} disabled="true"></Input>
            <div style={{ flexDirection: "column" }}>
                <Button className="buttonSubmit" isDisabled onClick={handleSubmit} >Submit</Button>
                <Button className="buttonReset" isDisabled onClick={handleReset} >Reset</Button>

            </div>
        </div>


    )
}
export default ContactInput;