import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import {bones, collars, leashes} from '../js/data';



class App extends Component {

  render() {
    return (
      <div>
       <header className="jumbotron hero-spacer">
            <h1>Dogs R Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
            <p><Link to="/Contact" className="btn btn-primary btn-large">Contact Us</Link>
            </p>
        </header>

      

        
        <div className="row">
            <div className="col-lg-12">
                <h3>Latest Features</h3>
            </div>
        </div>
    

       
        <div className="row text-center">


            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/bone1.jpeg" alt="" />
                    <div className="caption">
                        <h3>Bones</h3>
                        <p>Price:{bones.bone1.price}</p><p>Description: {bones.bone1.description}</p>
                        <p>
                            <Link to="/Bones" className="btn btn-primary">Buy Now!</Link> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/leash1.jpeg" alt="" />
                    <div className="caption">
                        <h3>Leashes</h3>
                        <p>Price:{bones.bone1.price}</p><p>Description: {bones.bone1.description}</p>
                        <p>
                            <Link to="/Leashes" className="btn btn-primary">Buy Now!</Link> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/collar1.jpeg" alt="" />
                    <div className="caption">
                        <h3>Collars</h3>
                        <p>Price:{bones.bone1.price}</p><p>Description: {bones.bone1.description}</p>
                        <p>
                            <Link to="/Collars" className="btn btn-primary">Buy Now!</Link> 
                        </p>
                    </div>
                </div>
            </div>

        </div> 
       

    </div>
    );
  }
}

export default App;
