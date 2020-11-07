import React, { Component } from 'react'


class CheckBox extends Component {
    handleDone=()=>{
        this.props.handleCheckBox(this.props.ind);
    }

    render() {
        return (
            <div className='checkbox'>
               <label className="switch">
                   <input type="checkbox" onClick={this.handleDone} id="togBtn"/>
                   <div className="slider round"></div>
                </label>
            </div>
        )
    }
}

export default CheckBox
