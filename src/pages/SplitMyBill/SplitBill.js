import React, { Component } from 'react'
import  Board from './Board'
import Caption from './Caption'
import BillName from './BillName'
import './SplitBill.css'
import {accessToken} from '../../GoogleButton'

class SplitBill extends Component {
    constructor(props) {
        super(props)
        this.state = {
             billName:false,
             title:''
        }
    }
    
    handleBillName =(tit) => {
        this.setState({billName:true,
          title:tit
        })
    }
    render() {
        return (
        <div>{accessToken==null ? 
            <h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>:

            <div>
                  {/* caption */}
                 <Caption/>

                 {/* Bill Name */}
                 <div>
                     {!this.state.billName ?
                      <BillName handleBillName={this.handleBillName}/> :
                          <h2 className='bill-head'>{this.state.title}</h2>
                    }
                 </div>
        
                {/* Billing Board */}
                   <div>
                       {this.state.billName ? 
                       <Board>{this.state.title}</Board> : null} 
                   </div>

               </div>

        }</div>
              
        )
    }
}

export default SplitBill

