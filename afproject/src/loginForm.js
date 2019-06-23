import React, {Component} from 'react';
import './Home.css'
import './Slideshow.scss'
import HeaderMain from './Header'
import Footer from './Footer'
import {Card, Form, Button} from 'react-bootstrap'




class SignUpContainer extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <div >
                    <Card bg="primary" text="white" className="loginCard">
                        <Card.Header align="center">Login</Card.Header>
                        <Card.Body>
                            <div className="loginForm">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicChecbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="warning" type="submit" className="loginButton">
                                        Login
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
export default SignUpContainer;
