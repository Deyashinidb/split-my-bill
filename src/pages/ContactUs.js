import React from 'react'
import emailjs from "emailjs-com";
import {accessToken} from '../GoogleButton'

 function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

     emailjs.sendForm('service_4s25i2c', 'template_qymd6sr', e.target, 'user_XTs5mWZRbddoVppQYkZ8D')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        alert("Feedback sent successfully!!");
    }

    if(accessToken == null)
        return (<h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>)
    else
    return (
    
        <div className='wrap-contact' >
        <form style={{backgroundColor:'black'}} className='contact-form' onSubmit={sendEmail}>
          <div className='input-fields'>
        
            <input type='text' className='input-contact' placeholder='Your Name' name="name" required/>

            <input type='email' style={{borderRadius:"20px"}} className='input-contact' placeholder='Your Email Address' name="email" required/>


            <input type='text' className='input-contact' placeholder='Subject'
             name="subject" required/>

           <textarea  id="" cols="30" rows="8" className='input-contact' placeholder="Your message" name="message"></textarea>
         </div>

        <button className='btn-sub' type='submit'>Send Message</button>
     </form> 

      </div>
    )
}
export default ContactUs
