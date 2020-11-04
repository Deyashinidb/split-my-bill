import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Badge from "react-bootstrap/Badge"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button"
import {accessToken} from '../GoogleButton';

function Recent() {
    if(accessToken == null)
    return (<h1 style={{textAlign:"center",marginTop:'200px',color:"black"}}>Please Login First !</h1>)
    else
    return (
        <div>
        <Jumbotron>
            <h1 style={{color:"black"}}>Bill : Trip to Mangalore</h1>
            <h5>
            Paid By : 
            <Badge variant="secondary">Mohini Verma</Badge>
            <Badge variant="secondary">Khushnuma Abbas</Badge>
            </h5>
            <p>
            <Button variant="info">Details</Button>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1 style={{color:"black"}}>Bill : Lunch at Ocean Pearl</h1>
            <h5>
            Paid By : 
            <Badge variant="secondary">Deyashini</Badge>
            <Badge variant="secondary">Sonam</Badge>
            </h5>
            <p>
            <Button variant="info">Details</Button>
            </p>
        </Jumbotron>
        <Jumbotron>
            <h1 style={{color:"black"}}>Bill : Trip to Kudremukh</h1>
            <h5>
            Paid By : 
            <Badge variant="secondary">Simran Kaur</Badge>
            <Badge variant="secondary">Anjali Gupta</Badge>
            </h5>
            <p>
            <Button variant="info">Details</Button>
            </p>
        </Jumbotron>
        </div>
    )
}

export default Recent
