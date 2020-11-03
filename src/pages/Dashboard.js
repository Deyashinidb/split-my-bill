import React from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    return (
    <Container>
  <Row style={{marginTop:"50px"}}>
    <Col>
    <Card style={{ width: '18rem',marginLeft:'150px',backgroundColor:"#F7E7CE"}}>
        <Card.Body>
        <Card.Title>You Owe</Card.Title>
        <Card.Text>Simran Kaur</Card.Text>
        <Card.Link href="#" style={{color:"red"}}>Rs 195</Card.Link>
        <Button variant="danger">Pay</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
    <Card style={{float:'right',width: '18rem',marginRight:'150px',backgroundColor:"#cefac8"}}>
    <Card.Body>
    <Card.Title>You are Owed</Card.Title>
    <Card.Text>Sonam Jilova</Card.Text>
    <Card.Link href="#" style={{color:"green"}}>Rs 70.5</Card.Link>
    <Button variant="success">Remind</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
    <Col>
    <Card style={{ width: '18rem',marginLeft:'150px',backgroundColor:"#F7E7CE"}}>
        <Card.Body>
        <Card.Title>You Owe</Card.Title>
        <Card.Text>Anjali Gupta</Card.Text>
        <Card.Link href="#" style={{color:"red"}}>Rs 970</Card.Link>
        <Button variant="danger">Pay</Button>
        </Card.Body>
        </Card>
    </Col>
    <Col>
    <Card style={{float:'right',width: '18rem',marginRight:'150px',backgroundColor:"#cefac8"}}>
    <Card.Body>
    <Card.Title>You are Owed</Card.Title>
    <Card.Text>Khushnuma Abbas</Card.Text>
    <Card.Link href="#" style={{color:"green"}}>Rs 460.3</Card.Link>
    <Button variant="success">Remind</Button>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
    <Col>
    <Card style={{ width: '18rem',marginLeft:'150px',backgroundColor:"#F7E7CE"}}>
        <Card.Body>
        <Card.Title>You Owe</Card.Title>
        <Card.Text>Mohini Verma</Card.Text>
        <Card.Link href="#" style={{color:"red"}}>Rs 107</Card.Link>
        <Button variant="danger">Pay</Button>
        </Card.Body>
        </Card>
    </Col>
    </Row>
    </Container>
    )
}

export default Dashboard
//export default () => (<div><DashBoard/></div>)