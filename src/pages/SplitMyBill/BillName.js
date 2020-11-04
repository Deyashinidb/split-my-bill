import React, { Component } from 'react'
import './BillName.css'
class BillName extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleBillName(this.inputRef.current.value);
    }
    
    
    render() {
        return (
            <div className='bill-title'>
                <h2>Enter a Group Name</h2>
                     <form onSubmit={this.handleSubmit} className='box'>
                         <input type="text" placeholder='Type ...' ref={this.inputRef} className='group-name' required/>
                         <input type='submit' className='grp-btn' value='GO'/>
                     </form>
            </div>
        )
    }
}

export default BillName
