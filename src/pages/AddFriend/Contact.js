import React, { Component } from 'react'
import GoogleContacts from 'react-google-contacts';
import ContactList from './ContactList'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
             names:[],
             accessedContact:false,
             username:'',
             email:'',
             phone:''
        }
    }
    
    componentWillUnmount=()=>{
      localStorage.setItem('contacts', JSON.stringify(this.state.names));
    }

    handleUserNameChange=(event)=>{
      this.setState({
          username:event.target.value
      })
  }
 
     handleEmailChange=(event)=>{
      this.setState({email:event.target.value})
     }

     handlePhoneChange=(event)=>{
      this.setState({phone:event.target.value})
     }

   handleSubmit=(event)=>{
    
      event.preventDefault();
        const newContact =
        {
          title:this.state.username,
          email:this.state.email,
          phoneNumber:this.state.phone
        }
      this.setState({names:[...this.state.names,newContact],
       username:'',
       email:'',
       phone:''})
  }


    responseCallback = (response) => {

        this.setState(state => ({
            names:response,
            accessedContact:true
        }))
      }
      
       handleDeletion=(ind)=>{

        var newContact=this.state.names.filter((contact,index) => index!==ind);
        this.setState({names:newContact},
          ()=>{
            alert(`Deletion Successful !!!`)
        })    
       }

       
      render()
      {   
        const {names = [] } = this.state;
          return (   
            <div>{
                !this.state.accessedContact ?
                <GoogleContacts
                className='google-contact-icon'
                clientId="902745051902-n8mniqfnff21k202pt4bfqubkr9ek881.apps.googleusercontent.com"
                buttonText="Import Contacts from Google"
                onSuccess={this.responseCallback}
                onFailure={this.responseCallback}
              /> :
              
              <div>{ names.length && names!==undefined ?
                <div>
                <ContactList handleDeletion={this.handleDeletion}>{names}</ContactList>
                {/* handleDeletion={this.handleDeletion} */}
                  <div className='wrap-contact' >
                  <form className='contact-form' onSubmit={this.handleSubmit}>
                    <div className='input-fields'>
                  
                      <input type='text' className='input-contact' value={this.state.username}
                       onChange={this.handleUserNameChange} placeholder='Username' required/>

                      <input type='email' className='input-contact' value={this.state.email}
                       onChange={this.handleEmailChange} placeholder='Email' required/>


                      <input type='tel' className='input-contact' value={this.state.phone}
                       onChange={this.handlePhoneChange} placeholder='Phone Number'
                       required/>
                   </div>

                  <button className='btn-sub' type='submit'>Add Contact</button>
               </form> 

                </div>
                </div>
                 : 
                null
                }
                </div>
                }
          </div>
         )
    }     
}

export default Contact;