import React from 'react';

import { Box, Button, Form, FormField, TextInput, TextArea } from 'grommet';
import "../style/main.css"

function SendMessage() {

    const [value, setValue] = React.useState({});
    const [textValue, setTextValue] = React.useState('');
    return (
        <Box width={"400px"} alignSelf='center'>
            <Form
                value={value}
                onChange={nextValue => setValue(nextValue)}
                onReset={() => setValue({})}
                onSubmit={({ value }) => { console.log(value) }}
            >
                <FormField className="FormField" htmlFor="text-input-id" label="E-Mail">
                    <TextInput id="text-input-id" name="name" />
                </FormField>
               
            </Form>
            <TextArea
                size='xxlarge'
                placeholder="Message"
                value={textValue}
                onChange={event => setTextValue(event.target.value)}
            />
             <Box direction="row" gap="medium" style={{ paddingTop: "20px" }}>
                    <Button type="submit" primary label="Submit" className="mainButton" size='large'/>
                    <Button type="reset" label="Reset" className='mainButton' size='large'/>
                </Box>
        </Box>
    );
}
export default SendMessage;