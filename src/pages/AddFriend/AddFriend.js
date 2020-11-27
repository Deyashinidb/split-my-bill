import React from 'react'
import Contact from './Contact'
import './AddFriend.css'
import {accessToken} from '../../GoogleButton'
const back={
  backgroundColor:'#730099',
  height:'100%'
}
class AddFriend extends React.PureComponent {
  
  render() {
    return (
      <div>
        {accessToken===null ? 
        <h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>
        :
        <div style={back}>
          <h1 className='addfriend'>Import or Add Contacts</h1>
          <div className='contact-button'><Contact/></div> 
        </div>}
      </div>
      
    )
  }
}

export default AddFriend
