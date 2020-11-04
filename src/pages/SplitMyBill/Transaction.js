import React, { Component } from 'react'
import './Transaction.css'
import CheckBox from './CheckBox'
class Transaction extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             trans:[]
        }
    }
    
    handleDone =(id)=>{
        const tmp=[...this.state.trans]
        let i=0
        while(i<tmp.length){
            if(i===id)
            tmp[i].done=true
            i+=1
        }
            
        console.log(tmp)
        this.setState({trans:tmp})
    }

    handletransaction = ()=>{
        const data = [...this.props.data]
        console.log(data)
        const ownArray=data.filter((item) => item.own>0)
        let oweArray=data.filter( (item) => item.owe>0)
          ownArray.sort((a,b)=> a.own >= b.own)
          oweArray.sort((a,b)=>a.owe>=b.owe)
          console.log(ownArray)
          console.log(oweArray)
          let i=0
          let j=0
          let tmpTransact=[...this.state.trans]
    
          while(i<ownArray.length && j<oweArray.length)
          {
            if(ownArray[i].own>oweArray[j].owe) {
            tmpTransact=[...tmpTransact,{
              source:oweArray[j].name,
              dest:ownArray[i].name,
              amount:oweArray[j].owe,
              done:false
            }]
            ownArray[i].own-=oweArray[j].owe
            oweArray[j].owe=0
            j+=1        
            }
    
            else if(ownArray[i].own<oweArray[j].owe) {
              tmpTransact=[...tmpTransact,{
                source:oweArray[j].name,
                dest:ownArray[i].name,
                amount:ownArray[i].own,
                done:false
              }]
              oweArray[j].owe-=ownArray[i].own
              ownArray[i].own=0
              i+=1        
              }
    
              else
              {
                  tmpTransact=[...tmpTransact,{
                  source:oweArray[j].name,
                  dest:ownArray[i].name,
                  amount:ownArray[i].own,
                  done:false
                }]
                ownArray[i].own=0
                oweArray[j].owe=0
                i+=1
                j+=1
              }
    
            }
           this.setState({trans:tmpTransact})
    }
    render() {
        return (
             <div className='show-transaction'>
                 <hr/>
                 <div className='per-head'>Amount Per Person : {this.props.perHead.toFixed(2)} /-</div>


                 {/* rendering of cards */}


                 <div> 
                  {this.props.data.map( (item) => {
                return (
                    <div key={item.id} className='instance-t'>
                      <h3 className='instance-name-t'>{item.name}</h3>
                      <div className='instance-details-t-own'>Owns : Rs. {item.own.toFixed(2)} /-</div>
                      <div className='instance-details-owe'>Owes : Rs. {item.owe.toFixed(2)} /-</div>
                    </div> 
                )
            })}
            </div>
                 

           <div>
           <button className='split-btn' onClick={this.handletransaction}>Settle Up Transactions</button>
           </div>

        <div>
            { this.state.trans.length ? 
            <div className='contact-table'>
                <table>
                    <thead className='contact-head'>
                        <tr className='heading'>
                            <th>Debtor</th>
                            <th>Creditor</th>
                            <th>Transaction Amount</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.state.trans.map( (item,index) => (
                          <tr key={index}>
                            <td>{item.source}</td>
                            <td>{item.dest}</td>
                            <td>{item.amount.toFixed(2)}</td>
                            <td>{!item.done? <CheckBox handleDone={this.handleDone} ind={index}/> : <span>Sorted</span> }</td>
                          </tr>
                      ))}
                    </tbody>
                </table>
            </div> : null
            }</div>

           </div>
            
        )
    }
}

export default Transaction       
