import React from 'react';

import { Box, Button, Form, FormField, TextInput, TextArea } from 'grommet';
import "../style/main.css"

function SendMessage() {

    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSumbit = async () => {

        const data = {
            email: email.emailField,
            message: message,
        }
        console.log(data)
        fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((Reset) => {
                setEmail("");
                setMessage("");
            }).catch((error) => {
                console.log(error)
            })

    }
    const handleREset = async () => {
        setEmail("");
        setMessage("");


    }
    return (
        <Box width={"400px"} alignSelf='center'>
            <Form
                value={email}
                onChange={nextValue => setEmail(nextValue)}
                onReset={() => setEmail({})}
            >
                <FormField className="FormField" htmlFor="text-input-id" label="E-Mail" style={{fontSize: "25px", fontWeight:"bold"}}>
                    <TextInput value={email} id="text-input-id" name="emailField" />
                </FormField>
            </Form>
            <TextArea
                name="message"
                id="textArea"
                size='xlarge'
                placeholder="Message"
                value={message}
                onChange={event => setMessage(event.target.value)}
            />
            <Box direction="row" gap="medium" style={{ paddingTop: "20px" }}>
                <Button type="submit" primary label="Submit" className="mainButton" size='large' onClick={handleSumbit} />
                <Button type="reset" label="Reset" className='mainButton' size='large' onClick={handleREset} />
            </Box>
        </Box>
    );
}
export default SendMessage;