import React, {Component} from 'react';
import './Home.css'
import './Slideshow.scss'
import HeaderMain from './Header'
import Footer from './Footer'
import {Card, Form, Button, Col} from 'react-bootstrap'




class studentsRegisterForm extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <div >
                    <Card bg="primary" text="white" className="loginCard">
                        <Card.Header align="center">Student Registration From</Card.Header>
                        <Card.Body>
                            <div className="registerForm">
                                <Form>
                                    <Form.Group controlId="studentId">
                                        <Form.Label>StudentID</Form.Label>
                                        <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Student Id" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="degree">
                                            <Form.Label>Degree</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choose...</option>
                                                <option>SE</option>
                                                <option>SA</option>
                                                <option>DS</option>
                                                <option>SEPQM</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="year">
                                            <Form.Label>Year</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choose...</option>
                                                <option>1st Year</option>
                                                <option>2nd Year</option>
                                                <option>3rd Year</option>
                                                <option>4th Year</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="semester">
                                            <Form.Label>Semester</Form.Label>
                                            <Form.Control as="select">
                                                <option>Choose...</option>
                                                <option>1st Semester</option>
                                                <option>2nd Semester</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="studentAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Address" />
                                    </Form.Group>

                                    <Form.Group controlId="studentPhoneNo">
                                        <Form.Label>Phone No</Form.Label>
                                        <Form.Control type="email" name="name" id="name" required placeholder="Enter Phone No" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="warning" type="submit" className="registerButton">
                                        Register
                                    </Button>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default studentsRegisterForm;
