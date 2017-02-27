import React, {Component} from "react";
import {Link} from "react-router";

class NavBar extends Component {

    render() {
        return (
            <nav className='navbar navbar-inverse navbar-static-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to='/'>React Redux Axios</Link>
                    </div>
                    <div id='navbar'>
                        <ul className='nav navbar-nav'>
                            <li><Link to='/countries'>Countries</Link></li>
                            <li><Link to='/othercountry'>Other Country</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}


export default NavBar;