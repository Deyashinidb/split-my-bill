import React from 'react'
import Contact from './Contact'
import './AddFriend.css'

const back={
  backgroundColor:'#730099',
  height:'100%'
}
class AddFriend extends React.PureComponent {
  
  render() {
    return (
      <div style={back}>
          <h1 className='addfriend'>Import or Add Contacts</h1>
          <div className='contact-button'><Contact/></div> 
        </div>
    )
  }
}

export default AddFriend
