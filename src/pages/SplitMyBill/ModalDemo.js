import React, { Component } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Board.css'

class ModalDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          name:'',
          email:'',
          amount:'',
          purpose:''   
        }
    }
    
    handleNameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleEmailChange=(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    handleAmountChange=(event)=>{
        this.setState({
            amount:event.target.value
        })
    }

    handlePurposeChange=(event)=>{
        this.setState({
            purpose:event.target.value
        })
    }
   
     handleSubmission = () =>{
        const newObj={
                name:this.state.name,
                email:this.state.email,
                amount:this.state.amount,
                purpose:this.state.purpose
                }
        this.state.name!=='' ? 
        this.props.onSubmit(newObj,true):
        this.props.onSubmit(newObj,false)
        
        this.setState({name:'',
                       email:'',
                       amount:'',
                       purpose:''
     })
        
     }


    render() {

        return (
            <div>
                <Modal show={this.props.show} onHide={() => this.props.onHide({ msg: 'Entry Cancelled!' })} centered dialogClassName='full-screen-modal'>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form className='modal-form'>
                            <input type="text" placeholder='Name' value={this.state.name} onChange={this.handleNameChange} required className='modal-field'/>
                            <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required className='modal-field'/>
                            <input type="number" placeholder="Amount Paid" value={this.state.amount} onChange={this.handleAmountChange} required className='modal-field'/>
                            <input type="text" placeholder="Purpose" value={this.state.purpose} onChange={this.handlePurposeChange} className='modal-field' />
                        </form>
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.props.onClick({ msg: 'Entry Closed!' })} >Close</Button>
                        <Button variant="primary" onClick={this.handleSubmission} >Add</Button>
                    </Modal.Footer>

                </Modal>
            </div>
        )
    };
}

export default ModalDemo;