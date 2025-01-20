import React from "react";
import Form from 'react-bootstrap/Form';
import "../style/contact.css";
import Button from "react-bootstrap/Button";

function ContactMe() {
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
    <Form style={{ width: "400px", justifyContent: "center" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="inputFont">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          className="inputInputFont"
          value={email}
          onChange={event => setEmail(event.target.value)} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="inputFont">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          className="inputInputFont"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </Form.Group>

      <Button className="SubmitResetOne" onClick={handleSubmit}>
        Submit
      </Button>
      <Button className="SubmitResetTwo" onClick={handleReset}>
        Reset
      </Button>
    </Form>
  );
}

export default ContactMe;
