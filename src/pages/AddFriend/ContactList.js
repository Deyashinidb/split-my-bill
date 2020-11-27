import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
class ContactList extends Component {
      
    deleting=(id)=>{
        this.props.handleDeletion(id)
    }
    
    render() {
        const contactItem=this.props.children
        return (
            <div className='contact-tables'>
            <table className='main-table'>
                <thead className='contact-head'>
                    <tr className='heading'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
               {contactItem.map( (contact,index) => {
                   return (
                       <tr key={index}>
                         <td>{contact.title}</td>
                         <td>{contact.email}</td>
                         <td>{contact.phoneNumber}</td>
                         {/* <td><AiIcons.AiOutlineCloseCircle className='remove'
                           onClick={this.deleting}/> */}
                           <td><DeleteButton deleting={this.deleting}
                           index={index}/></td>
                       </tr>
                   
                   )
               })}
               </tbody>
           </table>
           </div>
        )
    }
}
export default ContactList
