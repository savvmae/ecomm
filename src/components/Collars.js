import React, { Component } from 'react';
import {collars} from '../js/data';


class Collars extends Component {
  render() {
    return (
      <div>
       
        <div className="row">
            <div className="col-lg-12">
                <h3>Collars</h3>
            </div>
        </div>
    

       
        <div className="row text-center">


            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/collar1.jpeg" alt="" />
                    <div className="caption">
                        <h3>Collar 1!</h3>
                        <p>Price:{collars.collar1.price}</p><p>Description: {collars.collar1.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_2/141-2472649-2477819?url=search-alias%3Daps&field-keywords=dog+collars" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/collar2.jpeg" alt="" />
                    <div className="caption">
                        <h3>Collar 2!</h3>
                        <p>Price:{collars.collar2.price}</p><p>Description: {collars.collar2.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_2/141-2472649-2477819?url=search-alias%3Daps&field-keywords=dog+collars" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/collar3.jpeg" alt="" />
                    <div className="caption">
                        <h3>Collar 3</h3>
                        <p>Price:{collars.collar3.price}</p><p>Description: {collars.collar3.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_2/141-2472649-2477819?url=search-alias%3Daps&field-keywords=dog+collars" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

        </div> 
       

    </div>
    );
  }
}

export default Collars;