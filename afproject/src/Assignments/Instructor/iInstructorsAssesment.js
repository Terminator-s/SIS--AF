import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import '../aCSS/iInstructors.css'
import {Card, Accordion, Button} from 'react-bootstrap'
import View from './iViewAssesments'
import Create from './iCreateAssesments'


class AssignmentsHome extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <div className="cardDiv">
                    <br/><br/>
                    <h3 align="center">Assessments</h3>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                   View Assessments
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body><View/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Create Assessments
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body><Create/></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <br/><br/>
                <Slide />
                <Footer/>
            </div>
        );
    }
}
class Slide extends Component{
    render(){
        return(

            <div className="wrapper">
                <div className="slideshows">
                    <div className="slideshow slideshow--hero">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--before">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                    <div className="slideshow slideshow--contrast slideshow--contrast--after">
                        <div className="slides">
                            <div className="slide slide1"></div>
                            <div className="slide slide2"></div>
                            <div className="slide slide3"></div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default AssignmentsHome;
