import Jumbotron from "react-bootstrap/Jumbotron"
import Badge from "react-bootstrap/Badge"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"
import {accessToken} from '../GoogleButton'
import {firebaseDb} from '../firebase'

import React, { Component } from 'react'

class Recent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tripList:[]
        }
    }
    
        
        
    componentDidMount(){
        let triplist=[];
        var ref=firebaseDb.database().ref("trips");
        ref.once('value').then((snapshot) => {
            Object.keys(snapshot.val()).forEach(key => triplist.push({
                tripName: key,
                tripDetails: snapshot.val()[key],
                visible:false
             }));
             console.log(triplist);
             this.setState({tripList:triplist})
            })
     }

     handleVisible = (ind) => {
       let triplist=[...this.state.tripList];
       triplist.forEach((key,id) => {
           if(id===ind)
           key.visible=!key.visible
       })
       this.setState({tripList:triplist})
     }

    render() {
        if(accessToken == null)
        return (<h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>)
    else
    { const {tripList}=this.state;
    return (
        <div>
            {tripList.map((trip,ind) => {
            return (
                <div key={ind}>
                   <Jumbotron>
            <h1 style={{color:"black"}}>Bill : {trip.tripName}</h1>
                 <h5>
              Payment Completed By :
                  {Object.entries(trip.tripDetails).map(t => {
                 if(t[1].done){
                    return (<span className="badge badge-pill badge-success">{t[1].source}</span>)
                 }
            else
            return (null)})}
            </h5>     
                 <div>
                 { trip.visible ? 
                  <div className="container">
                   <table key={ind} className="table table-striped table-dark table-hover">
                                  <thead class="thead-dark">
                                 <tr>
                                    <th>Debtor</th>
                                    <th>Creditor</th>
                                    <th>Transaction Amount</th>
                                     <th>Done</th>
                                 </tr>
                                </thead>
                                <tbody>

                        {Object.entries(trip.tripDetails).map(t => {
                
                            return ( 
                                <tr key={t[0]}>
                                    <td>{t[1].source}</td>
                                    <td>{t[1].dest}</td>
                                    <td>{t[1].amount.toFixed(2)} /-</td>
                                    <td>{t[1].done===true ? 'Paid': 'Payment Pending'}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </table> 
                        <p>
                  <Button onClick={()=>this.handleVisible(ind)} variant="info">View Less</Button>
                 </p>
                  </div>:
                  <p>
                  <Button onClick={()=>this.handleVisible(ind)} variant="info">View Details</Button>
                 </p>
                } </div>
         </Jumbotron>
         </div>
                
            )
        } )}
        </div>           
    )
    }
    }
}

export default Recent;
