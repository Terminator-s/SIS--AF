import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateCourse extends Component{

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" >
                        <Form.Group controlId="courseID">
                            <Form.Label>Course Id</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Course Id" />
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
            </div>
        );
    }
}

export default CreateCourse;