import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';
import {accessToken,userName} from '../GoogleButton';
import {firebaseDb} from '../firebase'
//import Mailto from 'react-mailto'

const myStyle={
    background:'url(https://media.istockphoto.com/photos/elegenat-purple-nice-website-background-picture-id462041441?k=6&m=462041441&s=170667a&w=0&h=XVVMz9V2mYiCbcvN3SMTVsz9kilGEPegwL8nHb2SSww=)',
    width:'500%'
}

const Mailto = ({email,subject='',body='',person='',title='',amount=0, children}) => {
    let params=subject || body ? '?' : '';
    let tmp='/- for the occasion of '
    body=person+body+amount+tmp+title
    if(subject) params+=`subject=${encodeURIComponent(subject)}`;
    if (body) params+=`${subject ? '&' : ''}body=${encodeURIComponent(body)}.`;
  
    return <a style={{color:'white',textDecoration:'none'}} target="_blank" href={`mailto:${email}${params}`}>{children}</a>;
  };

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ownList:[],
            oweList:[]
        }
    }

    componentDidMount(){

        let ownlist=[];
        let owelist=[];
        let triplist=[];
        var ref=firebaseDb.database().ref("trips");
        ref.once('value').then( (snapshot) => {
            Object.keys(snapshot.val()).forEach(key => {
                triplist.push({
                tripName: key,
                tripDetails: snapshot.val()[key]
            
             })});
             //console.log(triplist);
             triplist.forEach((trip) => {
                Object.entries(trip.tripDetails).forEach(t => {
                    console.log(t[1].dest)
                    console.log(typeof t[1].dest)
                    console.log(userName)
                    console.log(typeof userName)
                    if(t[1].dest.toLowerCase()===userName.toLowerCase())
                    {   
                        ownlist.push({title:trip.tripName,
                        peer:t[1].source,
                        amount:t[1].amount,
                        email:t[1].semail
                        });
                    }
                    else if(t[1].source.toLowerCase()===userName.toLowerCase())
                    {
                        owelist.push({title:trip.tripName,
                        peer:t[1].dest,
                        amount:t[1].amount,
                        email:t[1].demail
                        }); 
                    }               
                })
            })
            console.log(ownlist);
            console.log(owelist);
            this.setState({ownList:ownlist,oweList:owelist}) 
            })
            
     }

     setReminder=()=>{
         alert('Opening Gmail to send Reminder Mails!!!')
         
     }
    render() {
        if(accessToken == null)
    return (<h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>)
    else
    return (
    <Container style={myStyle}>
        <div>
        { this.state.ownList.map ( (item,ind)=>{
            return (
                <div style={{display:"inline-block"}}>
            <Card key={ind} style={{display:"inline-block",width: '18rem',marginLeft:'150px',marginTop:'150px' ,backgroundColor:"#F7E7CE"}}>
                <Card.Body>
                <Card.Title>For {item.title} You Own : </Card.Title>
                <Card.Text style={{color:"black",marginTop:"-50px"}}>From {item.peer}</Card.Text>
                <Card.Text style={{color:"black",marginTop:"-50px"}}>An amount of <span style={{color:"red"}}>Rs.{item.amount.toFixed(2)}/-</span></Card.Text>
                <div>
                    <Button variant="success" onClick={this.setReminder}>
            <Mailto email={item.email} subject="Reminder of Payment" body=", You owe me an amount of Rs. " person={item.peer} title={item.title} amount={item.amount.toFixed(2)}>Remind</Mailto>
            </Button>
                </div>
                {/* <a class="mailto" href="mailto:titli22deya2evrst@gmail.com">Remind</a> */}
                </Card.Body>
                </Card></div>)
        })
    }</div>
        <div>{this.state.oweList.map ( (item,ind)=>{
            return (
            <div style={{display:"inline-block"}}>
            <Card key={ind} style={{ width: '18rem',marginLeft:'150px',marginTop:'150px',backgroundColor:"#F7E7CE"}}>
                <Card.Body>
                <Card.Title>For {item.title} You Owe : </Card.Title>
                <Card.Text style={{color:"black",marginTop:"-50px"}}>To {item.peer}</Card.Text>
                <Card.Text style={{color:"black",marginTop:"-50px"}}>An amount of <span style={{color:"red"}}>Rs.{item.amount.toFixed(2)}/-</span></Card.Text>
                <div><Button variant="danger">Pay</Button></div>
                </Card.Body>
                </Card></div>
            )
        })}</div>
    </Container>
    )
    }
}

export default Dashboard
