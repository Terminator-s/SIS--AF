import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateInstructor extends Component{
    constructor(props) {
        super(props);

        this.state = {
            code:'',
            name: '',
            username:'',
            degree:[],
            courses:[],
            email:'',
            address:'',
            phone:''

        }

    }

    handleSubmit(e) {

        const instructor = {
            "code":e.instructor.code,
            "username": e.instructor.username,
            "password": e.instructor.password,
            "degree":e.instructor.degree,
            "courses":e.instructor.courses,
            "email": e.instructor.email,
            "address":e.instructor.address,
            "phone": e.instructor.phone
        };
        alert(instructor.username   + ", " + instructor.email + ",  " + instructor.phone);

        fetch('http://localhost:3000/instructor/add/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(instructor)
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
    }


    //handle On Submit
    handleOnSubmit(e) {
        e.preventDefault();

        const instructor_details = {
            code: document.getElementById('code').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            degree: document.getElementById('degree').value,
            courses: document.getElementById('courses').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value
        };

        this.handleSubmit({instructor:instructor_details });
    }



    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" onSubmit={value => this.handleOnSubmit(value)}>
                        <Form.Group controlId="instructorId">
                            <Form.Label>Instructor Code</Form.Label>
                            <Form.Control type="text" name="code" id="code" required placeholder="Enter Instructor Code" />
                        </Form.Group>
                        <Form.Group controlId="instructorName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" required placeholder="Enter Admin Name" />
                        </Form.Group>
                        <Form.Group controlId="instructorUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" id="username" required placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="instructorUserName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" id="password" required placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="instructorUserName">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control type="text" name="degree" id="degree" required placeholder="Enter Username" />
                        </Form.Group><Form.Group controlId="instructorUserName">
                        <Form.Label>course</Form.Label>
                        <Form.Control type="text" name="courses" id="courses" required placeholder="Enter Username" />
                    </Form.Group>
                        {/*<Form.Row>*/}
                        {/*    <Form.Group as={Col} controlId="degree">*/}
                        {/*        <Form.Label>Degree</Form.Label>*/}
                        {/*        <Form.Control as="select">*/}
                        {/*            <option>Choose...</option>*/}
                        {/*            <option>SE</option>*/}
                        {/*            <option>SA</option>*/}
                        {/*            <option>DS</option>*/}
                        {/*            <option>SEPQM</option>*/}
                        {/*        </Form.Control>*/}
                        {/*    </Form.Group>*/}

                        {/*    <Form.Group as={Col} controlId="course">*/}
                        {/*        <Form.Label>Course</Form.Label>*/}
                        {/*        <Form.Control as="select">*/}
                        {/*            <option>Choose...</option>*/}
                        {/*            <option>SE</option>*/}
                        {/*            <option>SA</option>*/}
                        {/*            <option>DS</option>*/}
                        {/*            <option>SEPQM</option>*/}
                        {/*        </Form.Control>*/}
                        {/*    </Form.Group>*/}
                        {/*</Form.Row>*/}

                        <Form.Group controlId="instructorEmail">
                            <Form.Label>Instructor Email</Form.Label>
                            <Form.Control type="email" name="email" id="email" required placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group controlId="instructorAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" id="address" required placeholder="Enter Address" />
                        </Form.Group>


                        <Form.Group controlId="instructorPhoneNo">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" name="[phone]" id="phone" required placeholder="Enter Phone No" />
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

export default CreateInstructor;