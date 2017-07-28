import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div>
       <header className="jumbotron hero-spacer">
            <h1>A Bit About Us!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repella. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid impedit officia est excepturi aut perferendis, rerum sunt, obcaecati ipsa, reprehenderit, doloribus vel modi ad dolorem at hic corporis doloremque repudiandae?</p>
            <p><Link to="/" className="btn btn-primary btn-large">See Latest Features</Link>
            </p>
        </header>

    </div>
    );
  }
}

export default About;