import React, {Component} from 'react';
import { Button, Row, Icon, Input } from 'react-materialize';
import  "./contact.css";

const PATH_BASE = 'https://formspree.io';
const PATH_EMAIL_TO = '/maribelduranucm@gmail.com';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email:'',
      message: '',
      messageError: ''

    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event){
    if (event.target.name === "message"){
      this.setState({ 
        [event.target.name]: event.target.value,
        messageError: "",
      });
    }else{
      this.setState({ [event.target.name]: event.target.value});
    }
   
  }
  onFormSubmit(event){
    if(this.state.message.length === 0){
      event.preventDefault();
      this.setState({ messageError: "message is required"});
    }
    else{
      this.setState({ messageError: ""});
    }
  }
  render() {
    const url = `${PATH_BASE}${PATH_EMAIL_TO}`;
    
    return(
      <section className="contact" >
      <h3>Have more questions? </h3>
      <p>Send me a message and I will answer it on this website!</p>
  
      <form className="grey-border-shadow" action={url}
      method="POST" onSubmit={this.onFormSubmit}>
        <Row>
          <Input s={12} type="text" name="fullName" label="Name" validate={true} icon="account_circle" onChange={this.onInputChange} value={this.state.fullName} />
          <Input s={12} type="email" name="email" label="Email" validate={true} icon="email" onChange={this.onInputChange} value={this.state.email}/>
          <Input s={12}
            type='textarea' name="message" 
            label="Message" icon="mode_edit"
            error={this.state.messageError} 
            validate={true}
            onChange={this.onInputChange} 
            value={this.state.message} />
          <input type="text" name="_gotcha" style={{display:"none"}} />
          <Button type='submit' waves='light'>Submit<Icon right>send</Icon></Button>
        </Row>
      </form>
    </section>
    );
  }
}

export default Contact;