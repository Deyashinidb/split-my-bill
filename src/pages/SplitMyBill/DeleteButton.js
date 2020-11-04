import React, { Component } from 'react'
import * as AiIcons from 'react-icons/ai'
export class DeleteButton extends Component {
    render() {
        return (
            <div>
                <AiIcons.AiOutlineCloseCircle className='remove'
                           onClick={()=>{this.props.deleting(this.props.index)}}/>
            </div>
        )
    }
}

export default DeleteButton
