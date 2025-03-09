import React from 'react';
import { useState } from 'react';
import { Box, Button, Form, FormField, TextInput, TextArea } from 'grommet';
import "../style/main.css"
import { colors } from 'grommet/themes/base';
import "../style/contactme.css"
import { useFetchLanguage } from '../static/UseEffect';

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
const [languageChoice, setLanguageChoice] = useState("EN");

const content = useFetchLanguage(languageChoice);


if (!content) {
  return <div>Loading...</div>; 
}
const languageContent = content.english[0];

    return (
        <Box width={"400px"} alignSelf='center'>
                    <Form
                        value={email}
                        onChange={nextValue => setEmail(nextValue)}
                        onReset={() => setEmail({})}
                    >
                        <FormField className="inputLabel" htmlFor="text-input-id" label="E-Mail" >
                            <TextInput value={email} id="text-input-id" name="emailField" className='inputEmail' a11yTitle='Please input your Email.' />
                        </FormField>
                    </Form>
                    <TextArea
                        name="message"
                        id="textArea"
                        size='xlarge'
                        className='inputText'
                        a11yTitle='Please input your message.'
                        value={message}
                        onChange={event => setMessage(event.target.value)}
                    />
                    <Box direction="row" gap="medium" style={{ paddingTop: "20px" }}>
                        <Button a11yTitle={languageContent.SendMessageButton1} type="submit" primary label={languageContent.SendMessageButton1} className="mainButton" size='large' onClick={handleSumbit} />
                        <Button a11yTitle={languageContent.SendMessageButton2} type="reset" label={languageContent.SendMessageButton2} className='mainButton' size='large' onClick={handleREset} />
                    </Box>
        </Box>

    );
}
export default SendMessage;