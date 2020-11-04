import React, { Component } from 'react'
import DeleteButton from './DeleteButton'
import './Cards.css'
class Cards extends Component {
    
    deleting=(id)=>{
        this.props.handleDeletion(id)
    }

    render() {
        const data=this.props.data
        return (
             <div>
              {data.map( (person) => {
                return (
                    <div key={person.id} className='instance'>
                       <h3 className='instance-name'>{person.name}</h3>
                       <div className='instance-details'>Email : {person.email}</div>
                       <div className='instance-details'>Paid : Rs. {person.amount} /-</div>
                       <div className='instance-details'>For : {person.purpose}</div>
                       <div className='instance-delete'>
                           {!this.props.splitted ? 
                            <DeleteButton index={person.id} deleting={this.deleting}/> : null
                           }
                           </div> 
                       
                     </div>
                
                )
            })}
             </div>
            
        )
    }
}

export default Cards
