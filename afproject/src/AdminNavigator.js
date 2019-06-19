import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import logo from './resources/logo.png'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Instructor from './components/Instructor'

class AdminNavigator extends Component {
    render() {
        return (
            <div>
                <NavigatorBar/>
            </div>

        )
    }
}

class NavigatorBar extends Component {
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
    }

    addIns = function (e) {
        ReactDOM.render(<Instructor/>, document.getElementById('root'));
    };

    render() {
        return (
            <div className="header">
                <img src={logo}/>

                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Instructor" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1" onSelect={k => this.addIns(k)}>Add instructor</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Update instructor</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Remove instructor</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Modules" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Add module</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Update module</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">remove module</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Notices" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Add notice</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Update notice</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">remove notice</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </div>


        )
    }
}

export default AdminNavigator;