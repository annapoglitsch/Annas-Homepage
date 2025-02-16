import React from "react";
import Form from 'react-bootstrap/Form';

function EmailField() {
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label aria-label="Please enter your email in the input field">Email address</Form.Label>
      <Form.Control aria-label="Input Field" type="email" placeholder="name@example.com" />
    </Form.Group>
    </Form>
}
export default EmailField;