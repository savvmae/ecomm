import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';


export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink activeStyle={{color:"yellow"}} exact to="/" className="navbar-brand" href="/">Home</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} exact to= "/About" > About </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} exact to= "/Contact" > Contact </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} exact to= "/Bones" > Bones </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} exact to= "/Collars" > Collars </NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "yellow"}} exact to= "/Leashes" > Leashes </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }
}


