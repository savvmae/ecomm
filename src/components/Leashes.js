import React, { Component } from 'react';
import {leashes} from '../js/data';


class Leashes extends Component {
  render() {
    return (
      <div>        
        <div className="row">
            <div className="col-lg-12">
                <h3>Leashes</h3>
            </div>
        </div>
    

       
        <div className="row text-center">


            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/leash1.jpeg" alt="" />
                    <div className="caption">
                        <h3>Leash 1!</h3>
                        <p>Price:{leashes.leash1.price}</p><p>Description: {leashes.leash1.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+leashes&rh=i%3Aaps%2Ck%3Adog+leashes" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/leash2.jpeg" alt="" />
                    <div className="caption">
                        <h3>Leash 2!</h3>
                        <p>Price:{leashes.leash2.price}</p><p>Description: {leashes.leash2.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+leashes&rh=i%3Aaps%2Ck%3Adog+leashes" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 col-sm-6 hero-feature">
                <div className="thumbnail">
                    <img src="./images/leash3.jpeg" alt="" />
                    <div className="caption">
                        <h3>Leash 3!</h3>
                        <p>Price:{leashes.leash3.price}</p><p>Description: {leashes.leash3.description}</p>
                        <p>
                            <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+leashes&rh=i%3Aaps%2Ck%3Adog+leashes" className="btn btn-primary">Buy Now!</a> 
                        </p>
                    </div>
                </div>
            </div>

        </div> 
       

    </div>
    );
  }
}

export default Leashes;