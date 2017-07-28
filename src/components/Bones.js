import React, { Component } from 'react';
import {bones} from '../js/data';


class Bones extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Bones</h3>
                    </div>
                </div>



                <div className="row text-center">


                    <div className="col-md-4 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src="./images/bone1.jpeg" alt="" />
                            <div className="caption">
                                <h3>Bone 1!</h3>
                                <p>Price:{bones.bone1.price}</p><p>Description: {bones.bone1.description}</p>
                                <p>
                                    <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+bones&rh=i%3Aaps%2Ck%3Adog+bones" className="btn btn-primary">Buy Now!</a> 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src="./images/bone2.jpeg" alt="" />
                            <div className="caption">
                                <h3>Bone 2!</h3>
                                <p>Price:{bones.bone2.price}</p><p>Description: {bones.bone2.description}</p>
                                <p>
                                    <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+bones&rh=i%3Aaps%2Ck%3Adog+bones" className="btn btn-primary">Buy Now!</a> 
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 hero-feature">
                        <div className="thumbnail">
                            <img src="./images/bone3.jpeg" alt="" />
                            <div className="caption">
                                <h3>Bone 3!</h3>
                                <p>Price:{bones.bone3.price}</p><p>Description: {bones.bone3.description}</p>
                                <p>
                                    <a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=dog+bones&rh=i%3Aaps%2Ck%3Adog+bones" className="btn btn-primary">Buy Now!</a> 
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        );
    }
}

export default Bones;