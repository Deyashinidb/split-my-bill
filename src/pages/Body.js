import React, { Component } from 'react'
import background from './a.png'
const myStyle={
    width:'100%'
}
class Body extends Component {
    render() {
        return (
            <div>
                <img style={myStyle} src={background}/>
            </div>
        )
    }
}

export default Body
