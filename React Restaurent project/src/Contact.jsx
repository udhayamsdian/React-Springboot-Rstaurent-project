import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Have Question In Mind?</h1>
      <h1 className="primary-heading">Let Us Help You</h1>
      <div className="contact-form-container" style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
        {/* <input type="text" placeholder="yourmail@gmail.com" />
        <button className="secondary-button">Submit</button> */}
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Type Your Suggession</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" style={{backgroundColor:'#e48f0f',borderRadius:'10px'}}>Submit form</Button>
    </Form>
      </div>
    </div>
  );
};

export default Contact;