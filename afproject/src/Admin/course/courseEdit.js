import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'



class EditCourse extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>>
                <div className="SeditComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Course</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Course</Card.Title>
                            <Form className="sCreateFrom" >
                                <Form.Group controlId="courseID">
                                    <Form.Label>Course Id</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="year">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>1st year</option>
                                        <option>2nd year</option>
                                        <option>3rd year</option>
                                        <option>4th year</option>
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

                                <Form.Group as={Col} controlId="instructor">
                                    <Form.Label>Instructor</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>1st Semester</option>
                                        <option>2nd Semester</option>
                                    </Form.Control>
                                </Form.Group>

                                <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                                    Add
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <br/><br/>
                <Footer/>

            </div>
        )
    }
}

export default EditCourse;