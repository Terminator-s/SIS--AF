import React from 'react';
import {Table, Card, Button} from "react-bootstrap";
import Edit from './iEditAssesments'



const ViewAssessments = () => (


    <Card.Body>
        <Card.Title>View Assessments</Card.Title>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th></th>
                <th>Assessment Topic</th>
                <th>Year</th>
                <th>Semester</th>
                <th>Module</th>
                <th>Module Code</th>
                <th>Description</th>
                <th>Due date</th>
                <th>Due Time</th>
                <th>Document</th>
                <th>Edit</th>
                <th>Delete</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>Otto</td>
                <td><Button variant="success">Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
            </tr>

            </tbody>
        </Table>
    </Card.Body>
)

export default ViewAssessments;