import React, { Component } from 'react';

import '../styles/App.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Contact</h3>
                    </div>
                </div>

                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Name" />
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your Email" /><small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Say it!</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>



                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default Contact;




















