import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import '../aCSS/sStudent.css'
import { Redirect } from 'react-router-dom'
import {Card, Table, Button} from 'react-bootstrap'


class StudentViewAssignment extends Component {
     render() {
        return (
            <div>
                <HeaderMain/>
                <br/><br/>
                <div className="StudentViewAssCard">
                    <Card className="text-center">
                        <Card.Header>Submission Status</Card.Header>
                        <Card.Body>
                            <Card.Title>Lab EJB</Card.Title>
                            <div className="studentViewTable">
                                <Table striped bordered hover>
                                    <tbody>
                                    <tr>
                                        <td align='left'>Submission status</td>
                                        <td align='left'>Thornton</td>
                                    </tr>
                                    <tr>
                                        <td align='left'>Grading status</td>
                                        <td align='left'>Jacob</td>
                                    </tr>
                                    <tr>
                                        <td align='left'>Due date</td>
                                        <td align='left'>11/02/2019</td>
                                    </tr>
                                    <tr>
                                        <td align='left'>Due time</td>
                                        <td align='left'>9.00AM</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button variant="primary">Add Submission</Button>
                        </Card.Footer>
                    </Card>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}
export default StudentViewAssignment;
