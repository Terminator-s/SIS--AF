import React, {Component} from 'react';
import '../AdminHome.css'
import Header from '../Header'
import Footer from '../Footer'
import AdminNavigator from '../AdminNavigator'

export default class Instructor extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*<AdminNavigator style={{fontSize: 50}}/>*/}
                <AddInstructor/>
                <Footer/>
            </div>
        );
    }
}

class AddInstructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            isbn: '',
            author: '',
            price: '',
            year: '',
            publisher: ''
        }

    }


    handleOnSubmit(e) {
        e.preventDefault();

        const book_details = {
            name: document.getElementById('name').value,
            isbn: document.getElementById('isbn').value,
            author: document.getElementById('author').value,
            price: document.getElementById('price').value,
            year: document.getElementById('year').value,
            publisher: document.getElementById('publisher').value
        };

        this.props.handleSubmit({book: book_details});
    }

    render() {
     return(
         <div style={{marginLeft:100}}>
             <div className='row'>
                 <div className='card'>
                     <div className='card-header'>
                         <h1 className='modal-header'>Add Instructor</h1>
                     </div>
                     <div className='card-body'>
                         <form onSubmit={value => this.handleOnSubmit(value)}>
                             <label htmlFor="name">Code: </label>
                             <input type="text" className='form-control' name='name' id='name' required/>
                             <label htmlFor="isbn">Name: </label>
                             <input type="text" className='form-control' name='isbn' id='isbn' required/>
                             <label htmlFor="price">Username: </label>
                             <input type="text" className='form-control' name='price' id='price' required/>
                             <label htmlFor="price">Password: </label>
                             <input type="text" className='form-control' name='price' id='price' required/>

                             <label htmlFor="author">Department: </label>
                             <select name="author" id="author" className='form-control' required>
                                 <option value="">--------</option>
                             </select>

                             <div className='form-group'>
                                 <button type='submit' className='btn btn-success form-control'>Submit</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>

         </div>
     );
    }
}