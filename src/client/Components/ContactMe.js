import React from "react";
import Form from 'react-bootstrap/Form';
import "../style/contact.css";
import Button from "react-bootstrap/Button";

function ContactMe({languageChoice}) {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSumbit = async () => {

    const data = {
      email: email,
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

  };

  return (
    <Form style={{ width: "400px", justifyContent: "center" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label aria-label="Email" className="inputFont">Email</Form.Label>
        <Form.Control
        aria-label="Input field"
          type="email"
          placeholder="name@example.com"
          className="inputInputFont"
          value={email}
          onChange={event => setEmail(event.target.value)}
          onReset={() => setEmail({})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label aria-label="Lease a message in the message field" className="inputFont">Message</Form.Label>
        <Form.Control
        aria-label="Message Field"
          as="textarea"
          rows={3}
          className="inputInputFont"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </Form.Group>
      <Button aria-label={languageChoice.SendMessageButton1} className="SubmitResetOne" onClick={handleSumbit}>
      {languageChoice.SendMessageButton1}
      </Button>
      <Button aria-label={languageChoice.SendMessageButton2}  className="SubmitResetTwo" onClick={handleREset}>
      {languageChoice.SendMessageButton2} 
      </Button>

    </Form>
  );
}

export default ContactMe;
