import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditCourse from "./courseEdit";

class ViewCourse extends Component{
    next = function(e){
        ReactDOM.render(<EditCourse />, document.getElementById('root'));
    };
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Course</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Instructors</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>A001</th>
                            <th>aaaa</th>
                            <th>SE</th>
                            <th>Rushda</th>
                            <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewCourse;