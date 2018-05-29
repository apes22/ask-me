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
      <div className="padlet">
      <h3>You can also ask me on Padlet</h3>
      <div className="padlet-embed" style={{border:"1px solid rgba(0,0,0,0.1)", borderRadius:"2px; box-sizing:border-box", overflow:"hidden", position:"relative", width:"100%", background:"#F4F4F4"}}>
        <p style={{padding:"0", margin:"0"}}>
          <iframe title="Padlet" src="https://padlet.com/embed/35us5t10nzes?rel=0" frameBorder="0" allow="camera;microphone;geolocation" style={{width:"100%", height:"608px", display:"block", padding:"0", margin:"0"}}>
          </iframe>
        </p>
        <div style={{padding:"8px", textAlign:"right", margin:"0"}}>
          <a href="https://padlet.com?ref=embed" style={{padding:"0", margin:"0", border:"none", display:"block", lineHeight:"1", height:"16px"}} target="_blank" rel="noopener noreferrer">
            <img src="https://resources.padletcdn.com/assets/made_with_padlet.png" width="86" height="16" style={{padding:"0", margin:"0", background:"none", border:"none", display:"inline",  boxShadow:"none"}} alt="Made with Padlet"></img>
          </a>
        </div>
      </div>
      </div>
    </section>
    );
  }
}

export default Contact;