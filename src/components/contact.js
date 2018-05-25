import React from "react";
//import  "./contact.css";

const Contact = () =>
<section className="contact" >
  <h3>Have more questions?</h3>
  <h3>Send me a message!</h3>
<div className="row">
<form>
   <div className="row"> 
        <div className="input-field col s12">
          <input id="first_name" type="text" className="validate" />
          <label for="first_name">Name</label>
         
        </div>
      </div>
      
 
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
          
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Message</label>
        </div>
      </div>
    
  <div className="row">
        <div className="input-field col s12">
           <input className="waves-effect waves-light btn-large" type="submit" value="Send" />
           
        </div>
    </div>
    
     </form>
   </div>

</section>

export default Contact;