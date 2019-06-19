import React, {Component} from 'react';
import './AdminHome.css'
import Header from './Header'
import Footer from './Footer'
import AdminNavigator from './AdminNavigator'

class AdminHome extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AdminNavigator style={{fontSize: 50}}/>
                <Footer/>
            </div>
        );
    }
}

export default AdminHome;
