/*import React, { useEffect, useState } from 'react'*/
import './Board.css'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import ModalDemo from './ModalDemo';
import Cards from './Cards'
import Transaction from './Transaction'

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false,
      title: '',
      data: [],
      dataEntered:false,
      splitted:false,
      perHead:0
    };
  }

  handleShow = () => {
    this.setState({
      show: true,
      title: this.props.children
    });
  };

  handleClose = (fromModal) => {
    alert(fromModal.msg);

    this.setState({
      show: false
    });
  };

  nextId=()=>{
    this.uniqueId=this.uniqueId || 0;
    return this.uniqueId++;
 }

  handleSubmit = (fromModal,valid) =>{
    if(valid){
      var addedData=[
        ...this.state.data,
        {
            id:this.nextId(),
            owe:0,
            own:0,
            name:fromModal.name,
            email:fromModal.email,
            amount:fromModal.amount,
            purpose:fromModal.purpose
        }
    ]
    console.log(addedData)
    this.setState({
      show: false,
      data:addedData,
      dataEntered:true
    });
    }

    else {
      this.setState({
        show:false
      })
      alert('Enter Valid Data')
    }     
      
  }

  handleDeletion=(ind)=>{

    var newData=this.state.data.filter((data,index) => index!==ind);
    this.setState({data:newData},
      ()=>{
        alert(`Deletion Successful !!!`)
    })    
   }

   handleSpltBtn =()=>{

    const amt=this.state.data.map((item)=>{
      return parseInt(item.amount)
    });
    let tot=amt.reduce(function(a,b){
      return a+b;
  }, 0);
    console.log(tot);
    let newArray=[...this.state.data]
    for(let i=0;i<newArray.length;i++)
    {
      let due=newArray[i].amount-tot/newArray.length;
      if(due>=0){
      newArray[i]={...newArray[i],own:due}
      }
      else {
        newArray[i]={...newArray[i],owe:-due}
      }
      }

     this.setState({data:newArray,
      splitted:true,
      perHead:tot/newArray.length
    },()=>{
      console.log(this.state.data)
    })
    }

  render() {

    return (
      <div>
        <div>{!this.state.splitted ? 
        <Button variant="primary" onClick={this.handleShow} >
        Add Participants
        </Button> : null}
        </div>

        <ModalDemo
          show={this.state.show}
          title={this.state.title}
        //   data={this.state.data}
          onClick={this.handleClose}
          onHide={this.handleClose}
          onSubmit={this.handleSubmit} />

          <div>
            {this.state.data.length ? 
             <Cards data={this.state.data} handleDeletion={this.handleDeletion} splitted={this.state.splitted}/> : null
            }
          </div>
         <div>
           {this.state.data.length && !this.state.splitted ? 
            <button className='split-btn' onClick={this.handleSpltBtn}>Split</button> :
            null
          }
         </div>

         <div>
           { this.state.splitted ?
             <Transaction perHead={this.state.perHead} data={this.state.data}/>
             : null
          }
         </div>
      </div>
    );
  }

}

export default Board;