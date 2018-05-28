import React from "react";
import  "./contact.css";
import { Button, Row, Icon, Input } from 'react-materialize';

const Contact = () =>
<section className="contact" >
  <h3>Have more questions? </h3>
  <h3>Send me a message!</h3>
  
  <form className="grey-border-shadow">
    <Row>
      <Input s={12} type="text"  id="first_name" label="Name" validate="true" icon="account_circle" />
      <Input s={12} type="email" id="email" label="Email" validate="true" icon="email"/>
      <Input s={12} type='textarea' id="message" label="Message" icon="mode_edit" />
      <Button type='submit' waves='light'>Submit<Icon right>send</Icon></Button>
    </Row>
  </form>
</section>

export default Contact;