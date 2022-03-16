import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './_Contact.scss'
import {Form, FormGroup, Label, Input, Button } from 'reactstrap';

const  Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
    <Form inline
    className='col-md-6 mr-3 mb-3 bg-light justify-items-center form'
    >
      <FormGroup className="mb-2 me-sm-3 mb-sm-1">
    <Label
      className="me-sm-2 mt-2"
      for="exampleName"
    >
      Subject
    </Label>
    <Input
      id="exampleName"
      name="user_name"
      placeholder="Tell us your name"
      type="text"
  
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2 mt-2"
      for="exampleEmail"
    >
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="user_email"
      placeholder="iLoveMusicverse@email.com"
      type="email"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2 mt-2"
      for="exampleSubject"
    >
      Subject
    </Label>
    <Input
      id="exampleSubject"
      name="subject"
      placeholder="Subject"
      type="text"
    />
  </FormGroup>
  <FormGroup className="mb-2 me-sm-2 mb-sm-0">
    <Label
      className="me-sm-2 mt-2"
      for="exampleSubject"
    >
      Message
    </Label>
    <Input
      id="exampleMessage"
      name="message"
      placeholder="Type your message"
      type="textarea"
    />
  </FormGroup>
  <Button onClick={sendEmail} >
    Send 
  </Button>
 
</Form>
</div>
  );
};
export default Contact