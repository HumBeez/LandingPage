import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*import Navbar from 'react-bootstrap/Navbar';*/
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Navbar, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import CarouselFn from './Carousel';
import CardFn from './Card';

function Demof() {
    return (
       

        <Container fluid="ls">
            <Navbar bg="dark" variant="dark">
            
                <Navbar.Brand href="#home">Humbeez</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <div>
                <CarouselFn/>
              
            </div>
            <Row>
                <CardFn/>
                <CardFn/>
                <CardFn/>
                <CardFn/>
                <CardFn/>

            </Row>
            <Row>
                <Col md={ 500}>1 of 1</Col>
                <Col>2 of 1</Col>
                <Col>3 of 1</Col>
                <Col>4 of 1</Col>
                <Col>5 of 1</Col>
                <Col>6 of 1</Col>
            </Row>
        </Container>
    );
}

export default Demof